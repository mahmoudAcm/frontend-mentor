import { Box, InputBase, styled } from '@mui/material';

const CreateTodoFormRoot = styled('form')(({ theme }) => ({
  padding: '20px 23px',
  borderRadius: 4,
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  '--_margin': '-15px',
  [theme.breakpoints.down('md')]: {
    '--_margin': '-10px',
    padding: '14px 20px'
  }
}));

const CheckBox = styled(Box)(({ theme }) => ({
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  border: '1px solid transparent',
  borderColor: theme.palette.__mode === 'DARK' ? 'hsl(235, 19%, 23%)' : 'hsl(233, 17%, 94%)',
  [theme.breakpoints.down('md')]: {
    width: '20px',
    height: '20px'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  fontSize: 18.1 / 16 + 'rem',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.272px',
  marginTop: 'var(--_margin)',
  marginBottom: 'var(--_margin)',
  paddingTop: 'calc(-1 * var(--_margin))',
  paddingBottom: 'calc(-1 * var(--_margin))',
  flex: 1,
  '& input': {
    padding: 0,
    paddingLeft: '21px',
    height: 'auto',
    color: theme.palette.__mode === 'DARK' ? 'hsl(235, 33%, 85%)' : 'hsl(250, 3%, 39%)',
    '&::placeholder': {
      color: theme.palette.__mode === 'DARK' ? 'hsl(235, 10%, 52%)' : 'hsl(250, 4%, 69%)',
      opacity: 1
    }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 12.032 / 16 + 'rem',
    lineHeight: 11.301 / 12.032,
    letterSpacing: '-0.18px'
  }
}));

export default function CreateTodoForm() {
  return (
    <CreateTodoFormRoot>
      <CheckBox />
      <Input placeholder='Create a new todo...' />
    </CreateTodoFormRoot>
  );
}
