import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const PrevIcon = createCustomSvgIcon(
  <path d='M11 1 3 9l8 8' stroke='#1D2026' strokeWidth='3' fill='none' fillRule='evenodd' />,
  'PrevIcon',
  {
    viewBox: '0 0 12 18',
    style: {
      width: '12px',
      height: '18px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);
export default PrevIcon;
