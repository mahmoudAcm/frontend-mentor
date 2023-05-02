import { Box, Button, Link, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import Linkify from 'linkify-react';
import 'linkify-plugin-mention';
import { Input } from './Form';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';

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

export default function Content() {
  const { content, editing, owner, type, setContent, readMore, setReadMore } = useCommentOrReplyContext();

  const isEditing = editing && owner;

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
