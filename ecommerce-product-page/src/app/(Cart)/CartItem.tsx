import { Avatar, Box, IconButton, styled, Typography } from '@mui/material';
import RemoveIcon from '@/src/icons/RemoveIcon';
import useCartContext from '@/src/hooks/useCartContext';

const CartItemRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 50,
  height: 50,
  borderRadius: 2,
  marginTop: 2,
  marginRight: 16
}));

const ProductName = styled(Typography)(() => ({
  fontSize: '1rem',
  lineHeight: 1.6,
  letterSpacing: 0.08
}));

const PriceSection = styled(Box)(() => ({
  display: 'flex',
  gap: 6
}));

const Text = styled(ProductName)(() => ({
  letterSpacing: 0.4
}));

const TotalPrice = styled(ProductName)(() => ({
  fontWeight: 700,
  letterSpacing: 0.88
}));

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
}

export default function CartItem(props: CartItemProps) {
  const { removeFromCart } = useCartContext();
  return (
    <CartItemRoot>
      <StyledAvatar variant='rounded' src='/images/image-product-1-thumbnail.jpg' alt='product image' />
      <Box>
        <ProductName>{props.name}</ProductName>
        <PriceSection>
          <Text>
            ${props.price.toFixed(2)} x {props.amount}
          </Text>
          <TotalPrice>${(props.price * props.amount).toFixed(2)}</TotalPrice>
        </PriceSection>
      </Box>
      <IconButton sx={{ mr: '-9px' }} aria-label='Remove product from cart' onClick={removeFromCart}>
        <RemoveIcon />
      </IconButton>
    </CartItemRoot>
  );
}
