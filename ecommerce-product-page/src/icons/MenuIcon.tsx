import { createCustomSvgIcon } from '@/src/libs/createCustomSvgIcon';

const MenuIcon = createCustomSvgIcon(
  <path d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z' fill='#69707D' fillRule='evenodd' />,
  'MenuIcon',
  {
    viewBox: '0 0 16 15',
    style: {
      width: '16px',
      height: '15px'
    },
    xmlns: 'http://www.w3.org/2000/svg'
  }
);
export default MenuIcon;
