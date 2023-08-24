import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export default function useImageViewer() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(() => theme.breakpoints.down('lg'));

  const openImageViewerDialog = (index: number) => async () => {
    if (isMobile) return;
    await router.replace(pathname + '?imageViewer=true&index=' + index);
  };

  const closeImageViewerDialog = useCallback(async () => {
    await router.replace(pathname);
  }, [pathname, router]);

  useEffect(() => {
    if (isMobile) closeImageViewerDialog().then();
  }, [isMobile, closeImageViewerDialog]);

  return {
    isMobile,
    openImageViewerDialog,
    closeImageViewerDialog
  };
}
