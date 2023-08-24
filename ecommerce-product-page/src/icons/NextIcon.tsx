import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const NextIcon = createCustomSvgIcon(
  <path d='m2 1 8 8-8 8' stroke='#1D2026' strokeWidth='3' fill='none' fillRule='evenodd' />,
  'NextIcon',
  {
    viewBox: '0 0 13 18',
    style: {
      width: '13px',
      height: '18px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);
export default NextIcon;
