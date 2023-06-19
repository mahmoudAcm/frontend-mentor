import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const RightArrow = createCustomSvgIcon(
  <>
    <mask
      id='mask0_436_1834'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='2'
      width='17'
      height='16'
    >
      <rect width='16' height='16' transform='matrix(-1 0 0 1 16.5 2)' fill='#111111' />
    </mask>
    <g mask='url(#mask0_436_1834)'>
      <path d='M9.59128 10L4.5 15.0558L5.95436 16.5L12.5 10L5.95436 3.5L4.5 4.94422L9.59128 10Z' fill='#5357B6' />
    </g>
  </>,
  'RightArrowIcon',
  {
    viewBox: '0 0 17 18',
    style: {
      width: '17px',
      height: '18px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default RightArrow;
