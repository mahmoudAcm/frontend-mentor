import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const Thunder = createCustomSvgIcon(
  <path
    d='M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z'
    stroke='white'
    fill='none'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  />,
  'ThunderIcon',
  {
    viewBox: '0 0 24 24',
    style: {
      width: '24px',
      height: '24px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default Thunder;
