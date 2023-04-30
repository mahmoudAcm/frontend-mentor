import { Box, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import Linkify from 'linkify-react';
import 'linkify-plugin-mention';

const ContentRoot = styled(Box)(({ theme }) => ({
  maxWidth: '618px',
  marginTop: '15px',
  wordBreak: 'break-word',
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  fontWeight: '400',
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

interface ContentProps {
  children: string;
  type: 'comment' | 'reply';
}

export default function Content({ type, children }: ContentProps) {
  return (
    <ContentRoot aria-label={`${type} content`}>
      <Linkify
        options={{
          render: {
            mention: ir => {
              return <Mention>{ir.content}</Mention>;
            }
          }
        }}
      >
        {children}
      </Linkify>
    </ContentRoot>
  );
}
