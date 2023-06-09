import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const Arrow = createCustomSvgIcon(
  <path
    d='M4.466 8L8.526 3.646V4.71L4.466 0.426H6.384L9.716 3.828V4.528L6.384 8H4.466ZM0.98 4.92V3.492H8.414V4.92H0.98Z'
    fill='white'
  />,
  'ArrowIcon',
  {
    viewBox: '0 0 10 8',
    style: {
      width: '10px',
      height: '8px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default Arrow;
