import { Box, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

const ContentRoot = styled(Box)(({ theme }) => ({
  maxWidth: '618px',
  marginTop: '15px',
  wordBreak: 'break-word',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

function Mention({ children }: { children: ReactNode }) {
  return (
    <Typography component='span' color='primary' aria-label={`Mentioned user: ${children}`} sx={{ cursor: 'pointer' }}>
      {children}
    </Typography>
  );
}

export default function Content() {
  return (
    <ContentRoot aria-label='comment content'>
      <Typography fontWeight='400' color='textSecondary'>
        <Mention>@ramsesmiron</Mention> I couldn’t agree more with this. Everything moves so fast and it always seems
        like everyone knows the newest library/framework. But the fundamentals are what stay constant.
      </Typography>
    </ContentRoot>
  );
}
