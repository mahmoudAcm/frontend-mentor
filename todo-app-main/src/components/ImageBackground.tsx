import Image from 'next/image';
import { Box, Fade, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ImageBackground() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(() => theme.breakpoints.up('md'));
  const [isImageLoading, setImageLoading] = useState(true);

  const media = isDesktop ? 'desktop' : 'mobile';
  const mode = theme.palette.__mode === 'DARK' ? 'dark' : 'light';
  const imgSrc = `/images/bg-${media}-${mode}.jpg`;

  useEffect(() => {
    setImageLoading(true);
  }, [mode]);

  return (
    <Box sx={{ position: 'relative', zIndex: -1 }}>
      <Image
        src={imgSrc}
        alt='layout top backgrond'
        width={1440}
        height={isDesktop ? 300 : 200}
        style={{ width: '100%', userSelect: 'none' }}
        draggable='false'
        aria-hidden='true'
        tabIndex={-1}
        priority
        onLoad={event => {
          if (event.currentTarget.complete) setImageLoading(false);
        }}
      />
      <Fade appear={false} timeout={2000} in={isImageLoading}>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 0,
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)'
          }}
        />
      </Fade>
    </Box>
  );
}
