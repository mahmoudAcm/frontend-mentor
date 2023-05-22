import { Avatar, Button, FormControl, FormHelperText, InputBase, PaperProps, styled } from '@mui/material';
import useAuthContext from '@/src/hooks/useAuthContext';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';

const FormRoot = styled('form')(({ theme }) => ({
  maxWidth: '730px',
  minHeight: '144px',
  padding: '24px',
  display: 'flex',
  gap: '16px',
  alignItems: 'start',
  flexWrap: 'wrap',
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.paper,
  '& .MuiFormControl-root': {
    flex: 1
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    padding: '16px 16px 13px',
    '& .MuiAvatar-root': {
      order: 2,
      width: '32px',
      height: '32px'
    },
    '& .MuiButtonBase-root': {
      order: 3
    },
    '& .MuiFormControl-root': {
      flex: 'auto',
      width: '100%'
    }
  }
}));

export const Input = styled(InputBase)(({ theme }) => ({
  flex: 1,
  ...theme.typography.body1,
  fontWeight: '400',
  border: '1px solid var(--light-gray)',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  padding: '12px 24px',
  caretColor: theme.palette.primary.main,
  '& *::placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1 !important',
    fontWeight: '400'
  },
  '&.Mui-focused,&:hover': {
    borderColor: theme.palette.primary.main
  },
  '&.Mui-error': {
    border: '1px solid red'
  },
  [theme.breakpoints.down('md')]: {
    flex: 'auto',
    width: '100%'
  }
}));

const mapTypeToButton = {
  reply: 'reply',
  comment: 'send'
};

interface FormProps extends PaperProps {
  type: 'reply' | 'comment';
  placeholder?: string;
  parentType?: 'comment' | 'reply';
  replyingTo?: string;
  onSubmit?: () => void;
}

const schema = yup.object().shape({
  content: yup.string().required(`Can't be blank`)
});

export default function Form({ type, placeholder, sx, parentType, replyingTo, ...props }: FormProps) {
  const { user, logout } = useAuthContext();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: ''
    },
    mode: 'onSubmit'
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: { content: string }) => {
    try {
      if (type === 'comment') {
        await dispatch(commentsOrRepliesActions.addComment(data.content));
        reset();
        if (props.onSubmit) props.onSubmit();
        return;
      }

      if (type === 'reply') {
        const parentIds = {
          parentCommentId: '',
          parentReplyId: ''
        };

        if (parentType === 'comment') {
          parentIds.parentCommentId = replyingTo!;
        } else {
          parentIds.parentReplyId = replyingTo!;
        }

        await dispatch(commentsOrRepliesActions.addReply({ ...data, ...parentIds }));
        reset();
        if (props.onSubmit) props.onSubmit();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) return logout();
        else
          return setError('content', {
            message: error.response?.data.message
          });
      }

      if (error instanceof Error) {
        setError('content', {
          message: error.message
        });
      }
    }
  };

  return (
    <FormRoot aria-label={`${type} form`} sx={sx} onSubmit={handleSubmit(onSubmit)}>
      <Avatar src={user.image} alt={`${user.username} profile picture`} sx={{ marginRight: 'auto' }} />
      <FormControl error={Boolean(errors.content?.message)}>
        <Input
          multiline
          placeholder={placeholder ?? `Add a ${type}...`}
          aria-label={`Add a ${type}...`}
          rows={3}
          inputProps={{
            tabIndex: 0
          }}
          {...register('content')}
        />
        <FormHelperText>{errors.content?.message}</FormHelperText>
      </FormControl>
      <Button
        variant='contained'
        sx={{ padding: '12px 30px 12px 31px' }}
        aria-label={mapTypeToButton[type]}
        type='submit'
      >
        {mapTypeToButton[type]}
      </Button>
    </FormRoot>
  );
}
