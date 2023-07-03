import AvatarDefault, { AvatarProps } from '@mui/material/Avatar';
import { useEffect, useRef, useState } from 'react';
import { Box, BoxProps, Fade, Skeleton } from '@mui/material';

interface MuiAvatarProps extends Omit<AvatarProps, 'ref'> {
  overlaySx?: BoxProps['sx'];
}

export default function MuiAvatar(props: MuiAvatarProps) {
  const { onLoad, onLoadStart, overlaySx, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const overlayStyles = { position: 'absolute', inset: 0, width: '100%', height: '100%' };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (imageRef.current && !(imageRef.current?.querySelector('img')! as HTMLImageElement).complete) setLoading(true);
  });

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
        ref={imageRef}
        onLoad={() => {
          setLoading(false);
        }}
      />
      <Fade in={loading}>
        <Box sx={{ ...overlayStyles, zIndex: 1, background: 'white', borderRadius: '50%', overflow: 'hidden' }}>
          <Skeleton variant='rectangular' animation='wave' sx={{ ...overlayStyles, zIndex: 2 }} />
        </Box>
      </Fade>
    </Box>
  );
}
