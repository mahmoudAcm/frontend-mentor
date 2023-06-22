import AvatarDefault, { AvatarProps } from '@mui/material/Avatar';
import { useState } from 'react';
import { Box, BoxProps, Fade, Skeleton, useTheme } from '@mui/material';

interface MuiAvatarProps extends AvatarProps {
  overlaySx?: BoxProps['sx'];
}

export default function MuiAvatar(props: MuiAvatarProps) {
  const theme = useTheme();
  const { onLoad, onLoadStart, overlaySx, ...rest } = props;
  const [loading, setLoading] = useState(true);

  const overlayStyles = { position: 'absolute', inset: 0, width: '100%', height: '100%' };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '50%',
        ...overlaySx
      }}
      className='avatar--overlay'
    >
      <AvatarDefault
        {...rest}
        onLoad={() => {
          setLoading(false);
        }}
      />
      <Fade
        in={loading}
        appear={false}
        timeout={!loading ? 700 : 0}
        easing={{
          exit: theme.transitions.easing.easeOut,
          enter: theme.transitions.easing.sharp
        }}
      >
        <Box sx={{ ...overlayStyles, zIndex: 1, background: 'white', borderRadius: '50%', overflow: 'hidden' }}>
          <Skeleton variant='rectangular' animation='wave' sx={{ ...overlayStyles, zIndex: 2 }} />
        </Box>
      </Fade>
    </Box>
  );
}
