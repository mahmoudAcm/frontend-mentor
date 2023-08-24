'use client';

import { Box, Button, IconButton, styled, Typography } from '@mui/material';
import MinusIcon from '@/src/icons/MinusIcon';
import PlusIcon from '@/src/icons/PlusIcon';
import CartIcon from '@/src/icons/CartIcon';
import { useState } from 'react';
import useCartContext from '@/src/hooks/useCartContext';

const DetailsRoot = styled(Box)(({ theme }) => ({
  paddingTop: 58,
  [theme.breakpoints.down('lg')]: {
    padding: '0 24px 0 24px'
  }
}));

const Type = styled(Typography)(({ theme }) => ({
  fontSize: 14.672 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: 0.66,
  color: 'hsl(25, 72%, 57%)',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12.586 / 16 + 'rem',
    letterSpacing: 1.321
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 43.7 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: 0.219,
  marginTop: 16,
  color: 'hsl(225, 12%, 13%)',
  [theme.breakpoints.down('sm')]: {
    fontSize: 27.3 / 16 + 'rem',
    lineHeight: 1.16,
    letterSpacing: 0.355,
    marginTop: 12
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.6,
  letterSpacing: 0.08,
  marginTop: 35,
  color: 'hsl(252, 3%, 37%)',
  [theme.breakpoints.down('sm')]: {
    fontSize: 15.2 / 16 + 'rem',
    lineHeight: 1.65,
    letterSpacing: -0.046,
    marginTop: 16
  }
}));

const PriceSection = styled(Box)(({ theme }) => ({
  marginTop: 21,
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const Price = styled(Typography)(() => ({
  fontSize: 27.51 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: 1.238,
  color: 'hsl(230, 7%, 17%)'
}));

const OldPrice = styled(Typography)(({ theme }) => ({
  fontSize: 16.88 / 16 + 'rem',
  fontWeight: 700,
  lineHeight: 1.6,
  letterSpacing: 0,
  color: 'hsl(230, 4%, 75%)',
  textDecoration: 'line-through',
  [theme.breakpoints.down('md')]: {
    marginTop: 7
  }
}));

const Badge = styled(Typography)(() => ({
  width: 51,
  height: 27,
  borderRadius: 5,
  background: 'hsl(23, 74%, 94%)',
  display: 'grid',
  placeItems: 'center',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: 1.5,
  letterSpacing: 0.717,
  color: 'hsl(28, 70%, 58%)',
  userSelect: 'none'
}));

const Actions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 17,
  marginTop: 34,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

const IncreaseOrDecrease = styled(Box)(({ theme }) => ({
  width: 156,
  display: 'flex',
  alignItems: 'center',
  padding: '14px 8px',
  borderRadius: 8,
  background: 'hsl(230, 60%, 98%)',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

const ItemCount = styled(OldPrice)(() => ({
  textDecoration: 'none',
  color: 'hsl(230, 10%, 12%)',
  margin: 'auto !important'
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.5,
  fontWeight: 700,
  textTransform: 'none',
  borderRadius: 8,
  background: 'hsl(26, 100%, 55%)',
  color: 'hsl(46, 100%, 94%)',
  padding: 16,
  flex: 1,
  boxShadow: '10px 23px 45px -5px #FFDBB8',
  '&:hover': {
    background: 'hsl(27, 100%, 71%)'
  },
  '&:disabled': {
    background: 'hsl(27, 100%, 71%)',
    boxShadow: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export default function Details() {
  const productId = '1';
  const [count, setCount] = useState(0);
  const { addToCart } = useCartContext();

  const handleCount = (amount: number) => () => {
    setCount(count => Math.max(0, count + amount));
  };

  const handleAddToCart = () => {
    if (!count) return;
    addToCart({
      id: productId,
      amount: count,
      image: '/images/image-product-1-thumbnail.jpg',
      name: 'Fall Limited Edition Sneakers',
      price: 125.0
    });
  };

  return (
    <DetailsRoot>
      <Type>SNEAKER COMPANY</Type>
      <Title>Fall Limited Edition Sneakers</Title>
      <Description>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.
      </Description>
      <PriceSection>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Price>$125.00</Price>
          <Badge>50%</Badge>
        </Box>
        <OldPrice>$250.00</OldPrice>
      </PriceSection>
      <Actions>
        <IncreaseOrDecrease>
          <IconButton aria-label='add item' sx={{ py: '12px' }} onClick={handleCount(-1)}>
            <MinusIcon />
          </IconButton>
          <ItemCount>{count}</ItemCount>
          <IconButton aria-label='remove item' onClick={handleCount(1)}>
            <PlusIcon />
          </IconButton>
        </IncreaseOrDecrease>
        <AddToCartButton
          disabled={!count}
          startIcon={
            <CartIcon
              sx={{
                width: '17,46px !important',
                height: '16px !important',
                '& path': {
                  fill: 'currentColor'
                }
              }}
            />
          }
          onClick={handleAddToCart}
        >
          Add to cart
        </AddToCartButton>
      </Actions>
    </DetailsRoot>
  );
}
