import { Avatar, Box, styled, Typography } from '@mui/material';

const CartItemRoot = styled(Box)(() => ({
  display: 'flex',
  gap: 16
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 50,
  height: 50,
  borderRadius: 2,
  marginTop: 2
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

export default function CartItem() {
  return (
    <CartItemRoot>
      <StyledAvatar variant='rounded' src='/images/image-product-1-thumbnail.jpg' alt='product image' />
      <Box>
        <ProductName>Fall Limited Edition Sneakers</ProductName>
        <PriceSection>
          <Text>$125.00 x 3</Text>
          <TotalPrice>$375.00</TotalPrice>
        </PriceSection>
      </Box>
    </CartItemRoot>
  );
}
