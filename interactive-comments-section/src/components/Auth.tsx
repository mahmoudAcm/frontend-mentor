import { Box, FormControl, Paper, styled, Typography } from '@mui/material';
import SuccessIcon from '@/src/icons/Success';
import InputBase from '@mui/material/InputBase';

export const AuthPaper = styled(Paper)(() => ({
  padding: '24px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'grid',
  gap: '24px',
  boxShadow: 'var(--shadow)'
}));

export const StyledFormControl = styled(FormControl)(() => ({
  '& label': {
    marginBottom: '8px'
  }
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '4px',
  overflow: 'hidden',
  '& input': {
    padding: '8px'
  }
}));

export function InvitationSent() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <SuccessIcon sx={{ fontSize: '3rem', color: '#00c871' }} />
      <Typography fontWeight={400} sx={{ mt: '10px' }}>
        We sent the link to <span style={{ fontWeight: 500 }}>example@email.com</span>. The link will log you in.
      </Typography>
    </Box>
  );
}
