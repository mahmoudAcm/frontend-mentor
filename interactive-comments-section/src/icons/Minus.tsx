import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const Minus = createCustomSvgIcon(
  <path
    d='M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z'
    fill='#C5C6EF'
  />,
  'Minus',
  {
    viewBox: '0 0 11 3',
    style: {
      width: '11px',
      height: '3px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);

export default Minus;
