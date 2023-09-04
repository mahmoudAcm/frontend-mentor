import { Drawer } from 'vaul';
import { Box } from '@mui/material';
import CountryDetails from '@/src/components/CountryDetails';

export default function CountryDetailsDialog() {
  return (
    <Drawer.Root closeThreshold={0.7}>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Box
          component={Drawer.Content}
          sx={{
            background: theme => theme.palette.background.default,
            position: 'fixed',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            height: '85%',
            zIndex: theme => theme.zIndex.drawer * 2,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8
          }}
        >
          <CountryDetails />
        </Box>
        <Box
          component={Drawer.Overlay}
          sx={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.25)',
            zIndex: theme => theme.zIndex.drawer
          }}
        />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
