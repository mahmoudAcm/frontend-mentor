import { Box, FormControl, FormHelperText, FormLabel, Paper, styled, Typography } from '@mui/material';
import SuccessIcon from '@/src/icons/Success';
import InputBase from '@mui/material/InputBase';
import { ReactNode } from 'react';

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
  border: '1px solid transparent',
  '&:hover,&.Mui-focused': {
    borderColor: theme.palette.primary.main
  },
  '& input': {
    padding: '8px'
  },
  '&.Mui-error': {
    border: '1px solid red'
  }
}));

export function InvitationSent({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <SuccessIcon sx={{ fontSize: '3rem', color: '#00c871' }} />
      <Typography fontWeight={400} sx={{ mt: '10px' }}>
        We sent the link to <span style={{ fontWeight: 500 }}>{children}</span>. The link will log you in.
      </Typography>
    </Box>
  );
}

export function UploadButton({ children, id, error }: { children: ReactNode; id: string; error?: string }) {
  return (
    <StyledFormControl>
      <FormLabel
        htmlFor={id}
        sx={{
          width: '100%',
          height: '200px',
          borderRadius: '4px',
          border: theme => `1px dashed ${theme.palette.primary.main}`,
          position: 'relative',
          cursor: 'pointer',
          margin: 'auto'
        }}
      >
        {/*<FileUploadOutlinedIcon*/}
        {/*  fontSize='medium'*/}
        {/*  sx={{*/}
        {/*    margin: 'auto',*/}
        {/*    position: 'absolute',*/}
        {/*    inset: 0*/}
        {/*  }}*/}
        {/*  color='primary'*/}
        {/*/>*/}
        <Typography
          variant='body1'
          color='primary'
          sx={{
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
            position: 'absolute',
            inset: 0
          }}
        >
          Choose an image
        </Typography>
      </FormLabel>
      {children}
      <FormHelperText sx={{ textAlign: 'center', color: theme => theme.palette.secondary.main }}>
        {error}
      </FormHelperText>
    </StyledFormControl>
  );
}
