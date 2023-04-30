import { Avatar, Button, InputBase, Paper, styled } from '@mui/material';
import { useRef } from 'react';

const FormRoot = styled(Paper)(({ theme }) => ({
  maxWidth: '730px',
  minHeight: '144px',
  padding: '24px',
  display: 'flex',
  gap: '16px',
  alignItems: 'start',
  flexWrap: 'wrap',
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
    outline: `1px solid ${theme.palette.primary.main}`
  },
  [theme.breakpoints.down('md')]: {
    flex: 'auto',
    width: '100%'
  }
}));

const mapTypeToButton = {
  replay: 'replay',
  comment: 'send'
};

export default function Form({ type }: { type: 'replay' | 'comment' }) {
  const inputRef = useRef<HTMLTextAreaElement | null>();
  return (
    <FormRoot elevation={0} role='form' aria-label={`${type} form`}>
      <Avatar src='/images/avatars/image-juliusomo.png' alt='juliusomo profile picture' sx={{ marginRight: 'auto' }} />
      <Input
        multiline
        placeholder={`Add a ${type}...`}
        aria-label={`Add a ${type}...`}
        rows={3}
        inputRef={inputRef}
        inputProps={{
          tabIndex: 0
        }}
      />
      <Button variant='contained' sx={{ padding: '12px 30px 12px 31px' }} aria-label={mapTypeToButton[type]}>
        {mapTypeToButton[type]}
      </Button>
    </FormRoot>
  );
}
