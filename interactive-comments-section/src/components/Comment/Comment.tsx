import { Avatar, Box, Chip, Paper, styled, Typography } from '@mui/material';
import VoteButton from '@/src/components/VoteButton';
import Actions from '@/src/components/Comment/Actions';
import Content from '@/src/components/Comment/Content';

const CommentRoot = styled(Paper)(({ theme }) => ({
  padding: '24px',
  maxWidth: '730px',
  display: 'flex',
  gap: '24px',
  '& .comment-mobile-actions': {
    display: 'none'
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
    flexDirection: 'column-reverse',
    '& .comment-mobile-actions': {
      display: 'block'
    },
    '& .comment-desktop-action': {
      display: 'none'
    }
  }
}));

const CommentHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  '& .name-and-title': {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: '16px'
  }
}));

const StyledChip = styled(Chip)(() => ({
  marginLeft: '8px',
  borderRadius: '2px',
  lineHeight: 1.153846,
  height: '19px',
  '& .MuiChip-label': {
    paddingLeft: '6px',
    paddingRight: '6px'
  }
}));

export default function Comment() {
  const owner = false;
  return (
    <CommentRoot elevation={0}>
      <Box sx={{ display: 'flex' }}>
        <VoteButton />
        <Box className='comment-mobile-actions' sx={{ marginLeft: 'auto' }}>
          <Actions owner={owner} />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <CommentHeader aria-label='comment header'>
          <Avatar
            src='/images/avatars/image-amyrobson.png'
            sx={{ width: '32px', height: '32px' }}
            alt='amyrobson profile picture'
          />
          <Box className='name-and-title'>
            <Typography variant='h2' aria-label='comment owner: amyrobson'>
              amyrobson
              <StyledChip label='you' color='primary' />
            </Typography>
            <Typography fontWeight='400' color='textSecondary'>
              1 month ago
            </Typography>
          </Box>
          <Box className='comment-desktop-action' sx={{ marginLeft: 'auto', marginTop: '-2px' }}>
            <Actions owner={owner} />
          </Box>
        </CommentHeader>
        <Content />
      </Box>
    </CommentRoot>
  );
}
