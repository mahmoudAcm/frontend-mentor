import { Box, Button, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import Linkify from 'linkify-react';
import 'linkify-plugin-mention';
import { Input } from './Form';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';

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

interface ContentProps {}

export default function Content(props: ContentProps) {
  const { content, editing, owner, type, setContent } = useCommentOrReplyContext();

  return (
    <ContentRoot aria-label={`${type} content`}>
      {editing && owner ? (
        <>
          <Input
            fullWidth
            multiline
            value={content}
            placeholder={`Edit the ${type}...`}
            inputProps={{
              onChange: evt => setContent(evt.currentTarget.value)
            }}
            minRows={3}
            maxRows={10}
          />
          <Box sx={{ display: 'flex' }}>
            <Button variant='contained' sx={{ marginLeft: 'auto', marginTop: '16px', padding: '12px 21px 12px 20px' }}>
              Update
            </Button>
          </Box>
        </>
      ) : (
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
      )}
    </ContentRoot>
  );
}
