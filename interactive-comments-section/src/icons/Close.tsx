import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const Close = createCustomSvgIcon(
  <path
    d='M3.13802 2.19531L2.19531 3.13802L7.05729 8L2.19531 12.862L3.13802 13.8047L8 8.94271L12.862 13.8047L13.8047 12.862L8.94271 8L13.8047 3.13802L12.862 2.19531L8 7.05729L3.13802 2.19531Z'
    fill='white'
  />,
  'CloseIcon',
  {
    viewBox: '0 0 16 16',
    style: {
      width: '16px',
      height: '16px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default Close;
