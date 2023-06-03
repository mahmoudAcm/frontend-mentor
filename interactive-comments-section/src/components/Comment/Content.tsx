import { Box, FormControl, FormHelperText, Link, styled } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Linkify from 'linkify-react';
import 'linkify-plugin-mention';
import { Input } from './Form';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import useSocketContext from '@/src/hooks/useSocketContext';
import { SOCKET_EVENTS } from '@/src/constants';
import { LoadingButton } from '@mui/lab';
import Mentions from '@/src/components/Mentions';
import Mention from '@/src/components/Comment/Mention';

const ContentRoot = styled(Box)(({ theme }) => ({
  maxWidth: '618px',
  marginTop: '15px',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  fontWeight: '400',
  position: 'relative',
  '&::selection, & *::selection': {
    background: theme.palette.background.default,
    color: theme.palette.getContrastText(theme.palette.background.default)
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

const ReadMoreRoot = styled(Box)(() => ({
  position: 'absolute',
  padding: '18px 0 8px',
  right: 0,
  bottom: -5,
  left: 0,
  background: 'linear-gradient(0deg, white, white, #ffffff9c)',
  textAlign: 'center',
  boxShadow: '0px -6px 5px 13px #ffffff7d'
}));

const regExp = /^@[a-z][a-z\d-_]{0,20}/gi;

const schema = yup.object().shape({
  content: yup.string().required("It can't be blank")
});

export default function Content() {
  const { id, content, parentId, editing, owner, closeEdit, type, setContent, readMore, setReadMore } =
    useCommentOrReplyContext();
  const isEditing = editing && owner;
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content
    },
    mode: 'onSubmit'
  });
  const dispatch = useAppDispatch();
  const { emit, notifyMentionedUsers } = useSocketContext();
  const [isSubmitting, setSubmitting] = useState(false);

  const inputProps = register('content');

  //to update the content when the socket edit events occurs
  useEffect(() => {
    if (!isEditing) setValue('content', content);
  }, [setValue, isEditing, content]);

  const onSubmit = async () => {
    setSubmitting(true);
    const __content = getValues('content');
    if (__content === content) {
      setSubmitting(false);
      return closeEdit();
    }
    setContent(__content);
    try {
      if (type === 'comment') {
        const data = await dispatch(commentsOrRepliesActions.editComment(id, __content, notifyMentionedUsers));
        emit(SOCKET_EVENTS.EDIT_COMMENT, data);
      } else {
        const data = await dispatch(commentsOrRepliesActions.editReply(parentId!, id, __content, notifyMentionedUsers));
        emit(SOCKET_EVENTS.EDIT_REPLY, data);
      }
      closeEdit();
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError('content', { message: error.response?.data.message });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContentRoot
      aria-label={`${type} content`}
      sx={{
        maxHeight: readMore && !isEditing ? '145px' : undefined,
        overflow: readMore && !isEditing ? 'hidden' : undefined,
        userSelect: readMore && !isEditing ? 'none' : undefined
      }}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth error={Boolean(errors.content?.message)}>
            <Mentions inputHeight={124.6} style={{ display: 'flex' }}>
              {({ inputRef, onChange, ...props }) => (
                <Input
                  multiline={isEditing}
                  placeholder={`Edit the ${type}...`}
                  rows={4}
                  {...inputProps}
                  {...props}
                  inputRef={el => {
                    inputProps.ref(el);
                    inputRef.current = el;
                  }}
                  onChange={async evt => {
                    await inputProps.onChange({ target: evt.target });
                    onChange();
                  }}
                />
              )}
            </Mentions>
            <FormHelperText>{errors.content?.message}</FormHelperText>
          </FormControl>
          <Box sx={{ display: 'flex' }}>
            <LoadingButton
              variant='contained'
              sx={{ marginLeft: 'auto', marginTop: '16px', padding: '12px 21px 12px 20px' }}
              type='submit'
              loading={isSubmitting}
            >
              <span>Update</span>
            </LoadingButton>
          </Box>
        </form>
      ) : (
        <>
          <Linkify
            options={{
              render: {
                mention: ir => {
                  const tokens = ir.content.match(regExp)!;
                  const content = tokens?.[0];
                  return (
                    <>
                      <Mention>{content}</Mention>
                      {ir.content.slice(content.length)}
                    </>
                  );
                }
              }
            }}
          >
            {content}
          </Linkify>
          <ReadMoreRoot sx={{ display: !readMore ? 'none' : 'flex' }}>
            <Link
              sx={{ textTransform: 'capitalize', marginRight: 'auto' }}
              href='#'
              onClick={evt => {
                evt.preventDefault();
                setReadMore(false);
              }}
              aria-label='read more'
            >
              read more
            </Link>
          </ReadMoreRoot>
        </>
      )}
    </ContentRoot>
  );
}
