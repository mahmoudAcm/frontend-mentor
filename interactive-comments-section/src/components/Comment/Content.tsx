import { Box, Button, FormControl, FormHelperText, Link, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
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

function Mention({ children }: { children: ReactNode }) {
  return (
    <Typography component='span' color='primary' aria-label={`Mentioned user: ${children}`} sx={{ cursor: 'pointer' }}>
      {children}
    </Typography>
  );
}

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
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content
    },
    mode: 'onChange'
  });
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const content = getValues('content');
    setContent(content);
    try {
      if (type === 'comment') {
        await dispatch(commentsOrRepliesActions.editComment(id, content));
      } else {
        console.log(parentId);
        await dispatch(commentsOrRepliesActions.editReply(parentId!, id, content));
      }
      closeEdit();
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError('content', { message: error.response?.data.message });
      }
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
            <Input multiline placeholder={`Edit the ${type}...`} minRows={3} maxRows={10} {...register('content')} />
            <FormHelperText>{errors.content?.message}</FormHelperText>
          </FormControl>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant='contained'
              sx={{ marginLeft: 'auto', marginTop: '16px', padding: '12px 21px 12px 20px' }}
              type='submit'
            >
              Update
            </Button>
          </Box>
        </form>
      ) : (
        <>
          <Linkify
            options={{
              render: {
                mention: ir => {
                  return <Mention>{ir.content}</Mention>;
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
