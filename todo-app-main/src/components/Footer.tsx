import { styled, Typography } from '@mui/material';

const Note = styled(Typography)(({ theme }) => ({
  fontSize: 13.6 / 16 + 'rem',
  lineHeight: 14 / 13.6,
  color: theme.palette.__mode === 'DARK' ? 'hsl(237, 10%, 37%)' : 'hsl(236, 9%, 61%)',
  marginTop: '59px',
  marginBottom: '49px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '43px',
    marginBottom: '69px'
  }
}));

export default function Footer() {
  return (
    <footer>
      <Note align='center'>Drag and drop to reorder list</Note>
    </footer>
  );
}
