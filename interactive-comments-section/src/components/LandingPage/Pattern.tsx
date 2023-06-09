import { Box } from '@mui/material';

export default function Pattern() {
  return (
    <Box
      component='svg'
      aria-hidden='true'
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        width: '100%',
        height: '100%',
        stroke: 'rgba(255, 255, 255, 0.1)',
        maskImage: 'radial-gradient(100% 100% at top right, white, transparent)'
      }}
    >
      <defs>
        <pattern
          id='1d4240dd-898f-445f-932d-e2872fd12de3'
          width='200'
          height='200'
          x='50%'
          y='0'
          patternUnits='userSpaceOnUse'
        >
          <path d='M.5 200V.5H200' fill='none'></path>
        </pattern>
      </defs>
      <svg x='50%' y='0' fill='rgba(31, 41, 55, 0.2)' overflow='visible'>
        <path
          d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
          strokeWidth='0'
        ></path>
      </svg>
      <rect width='100%' height='100%' strokeWidth='0' fill='url(#1d4240dd-898f-445f-932d-e2872fd12de3)'></rect>
    </Box>
  );
}