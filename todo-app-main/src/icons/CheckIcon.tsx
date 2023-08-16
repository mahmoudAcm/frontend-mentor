import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const CheckIcon = createCustomSvgIcon(
  <path fill='none' stroke='#FFF' strokeWidth='2' d='M1 4.304L3.696 7l6-6' />,
  'CheckIcon',
  {
    viewBox: '0 0 11 9',
    style: {
      width: '11px',
      height: '9px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default CheckIcon;
