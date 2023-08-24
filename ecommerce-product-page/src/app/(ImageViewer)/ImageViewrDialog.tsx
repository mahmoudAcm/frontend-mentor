'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Dialog, IconButton, Slide } from '@mui/material';
import ImageViewer from '@/src/app/(ImageViewer)/ImageViewer';
import useImageViewer from '@/src/app/(ImageViewer)/useImageViewer';
import CloseIcon from '@/src/icons/CloseIcon';

export default function ImageViewerDialog() {
  const params = useSearchParams();
  const { isMobile, closeImageViewerDialog } = useImageViewer();

  const open = params.get('imageViewer') === 'true';
  const activeImageIndex = params.get('index') ?? '0';

  return (
    <Dialog
      open={open}
      scroll='body'
      TransitionComponent={isMobile ? undefined : Slide}
      TransitionProps={
        {
          direction: 'left'
        } as any
      }
      PaperProps={{
        sx: {
          overflow: 'visible',
          width: '100%',
          boxShadow: 'none',
          background: 'none',
          marginTop: '102px'
        }
      }}
    >
      <Box sx={{ display: 'flex', paddingBottom: '10px', marginTop: '-13px' }}>
        <IconButton
          sx={{
            ml: 'auto',
            mr: '36px',
            '& path': {
              fill: 'hsl(27, 78%, 56%)'
            }
          }}
          onClick={closeImageViewerDialog}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <ImageViewer className='dialog' activeImageIndex={+activeImageIndex} />
    </Dialog>
  );
}
