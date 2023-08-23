import { Box, Button, ClickAwayListener, Popover, PopoverProps, styled, Typography } from '@mui/material';
import CartItem from '@/src/app/(Cart)/CartItem';

const CartRoot = styled(Box)(({ theme }) => ({
  width: 'min(calc(100vw - 24px), 360px)',
  minHeight: 257,
  marginTop: 22,
  marginRight: 125,
  borderRadius: 7,
  background: 'white',
  boxShadow:
    '0px 15px 15px -10px rgba(0, 0, 0, 0.08), 15px 17px 15px -10px rgba(0, 0, 0, 0.08), -15px 17px 15px -10px rgba(0, 0, 0, 0.08)',
  [theme.breakpoints.down('lg')]: {
    marginTop: 25,
    marginRight: 6
  }
}));

const Title = styled(Typography)(() => ({
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: -0.324,
  lineHeight: 1.6,
  padding: '20px 24px 21px',
  color: 'hsl(0, 0%, 5%)',
  borderBottom: '1px solid hsl(252, 11%, 91%)'
}));

const CartBody = styled(Box)(() => ({
  padding: '24px 24px 32px'
}));

const CheckoutButton = styled(Button)(() => ({
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: -0.16,
  lineHeight: 1.6,
  color: 'hsl(47, 100%, 95%)',
  textTransform: 'none',
  background: 'hsl(26, 100%, 55%)',
  borderRadius: 8,
  padding: 15,
  marginTop: 25,
  '&:hover': {
    background: 'hsl(27, 100%, 71%)'
  }
}));

interface CartProps {
  anchorEl: PopoverProps['anchorEl'];
  onClose: () => void;
}

export default function Cart(props: CartProps) {
  const open = Boolean(props.anchorEl);
  return (
    <Popover
      open={open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      disableScrollLock
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            background: 'none'
          }
        }
      }}
    >
      <ClickAwayListener onClickAway={props.onClose}>
        <CartRoot>
          <Title>Cart</Title>
          <CartBody>
            <CartItem />
            <CheckoutButton fullWidth>Checkout</CheckoutButton>
          </CartBody>
        </CartRoot>
      </ClickAwayListener>
    </Popover>
  );
}
