import { Box, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mb: 3
      }}
    >
      Challenge by{' '}
      <Link
        href='https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link
        href='https://github.com/mahmoudAcm/frontend-mentor/tree/master/interactive-comments-section'
        target='_blank'
        rel='noreferrer'
      >
        Mahmoud Tarek
      </Link>
      .
    </Box>
  );
}
