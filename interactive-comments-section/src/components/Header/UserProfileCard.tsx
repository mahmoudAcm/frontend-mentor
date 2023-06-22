import { Box, Button, Typography } from '@mui/material';
import Avatar from '@/src/components/MuiAvatar';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import useAuthContext from '@/src/hooks/useAuthContext';
import { styled } from '@mui/material/styles';
import RightArrowIcon from '@/src/icons/RightArrow';
import { useRouter } from 'next/router';
import CloseIcon from '@/src/icons/Close';
import moment from 'moment';

const robotoFonts = Roboto({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin-ext', 'latin']
});

const UserProfileCardRoot = styled(Box)(({ theme }) => ({
  width: '295px',
  minHeight: '398px',
  borderRadius: '8px',
  background: 'white',
  position: 'sticky',
  top: 16,
  overflow: 'hidden',
  '& .image-bg': {
    width: '295px',
    height: '107px',
    background: 'rgba(197, 198, 239, 1)',
    // background: 'linear-gradient(90deg, #58B6F3 0%, rgba(228, 101, 130, 0.77) 100%)',
    position: 'relative',
    "& .close-icon[role='button']": {
      display: 'none',
      position: 'absolute',
      top: '12.75px',
      right: '12.75px'
    }
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
    overflow: 'visible'
  },
  '&.menu': {
    top: 0,
    display: 'block',
    '& .image-bg img': {
      display: 'none'
    },
    "& .close-icon[role='button']": {
      display: 'block'
    },
    '& .actions': {
      // paddingLeft: '18px',
      // paddingRight: '18px'
    }
  }
}));

const StyledButton = styled(Button)(() => ({
  ...robotoFonts.style,
  fontSize: '0.875rem',
  lineHeight: 1.4,
  padding: '10px 24px',
  fontWeight: '700'
}));

export default function UserProfileCard({ className, onClose }: { className?: string; onClose?: () => void }) {
  const router = useRouter();
  const {
    logout,
    user: {
      username,
      image,
      cookie: { expiresIn }
    }
  } = useAuthContext();

  return (
    <UserProfileCardRoot className={className}>
      <Box className='image-bg'>
        <Image src='/images/illiesteration/Rectangle 385.png' alt='bg' width='295' height='107' priority />
        <span
          role='button'
          aria-label='close menu'
          tabIndex={0}
          className='close-icon'
          onClick={onClose}
          onKeyDown={evt => {
            if (evt.key === 'Enter' && onClose) onClose();
          }}
        >
          <CloseIcon style={{ width: '24px', height: '24px', cursor: 'pointer', marginLeft: 'auto' }} />
        </span>
      </Box>
      <Avatar
        src={image}
        alt={`${username} profile picture`}
        sx={{ width: '96px', height: '96px' }}
        overlaySx={{ border: '2px solid white', m: '-54px auto' }}
      />
      <Box sx={{ p: '24px', mt: '54px', pb: '14px' }} className='actions'>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: '400', color: '#111111' }}>
          Your session will remain active until {moment(expiresIn).format('LL')}.
        </Typography>
        <StyledButton
          fullWidth
          variant='contained'
          sx={{ mt: '24px' }}
          onClick={async () => {
            await router.push('/app');
            if (onClose) onClose();
          }}
        >
          SEE FEEDS
        </StyledButton>
        <StyledButton
          fullWidth
          variant='outlined'
          sx={{ mt: '12px', borderWidth: '2px !important', py: '8px' }}
          onClick={async () => {
            await router.push('/notifications');
            if (onClose) onClose();
          }}
        >
          MY NOTIFICATIONS
        </StyledButton>
        <StyledButton
          fullWidth
          sx={{ textTransform: 'none', mt: '6px', fontSize: '1rem' }}
          endIcon={<RightArrowIcon />}
          onClick={logout}
        >
          Log out
        </StyledButton>
      </Box>
    </UserProfileCardRoot>
  );
}
