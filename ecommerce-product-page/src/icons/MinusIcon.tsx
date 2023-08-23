import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const MinusIcon = createCustomSvgIcon(
  <>
    <defs>
      <path
        d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
        id='a'
      />
    </defs>
    <use fill='#FF7E1B' fillRule='nonzero' xlinkHref='#a' />
  </>,
  'MinusIcon',
  {
    viewBox: '0 0 12 4',
    style: {
      width: '12px',
      height: '4px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);
export default MinusIcon;
