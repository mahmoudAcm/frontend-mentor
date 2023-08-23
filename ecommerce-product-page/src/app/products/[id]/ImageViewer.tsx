'use client';

import { Box, styled } from '@mui/material';
import Image from 'next/image';
import { useRef, KeyboardEvent, useState } from 'react';

const ImageViewerRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: 445,
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

const ActiveImage = styled(Image)(({ theme }) => ({
  width: 445,
  height: 445,
  borderRadius: 13,
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    borderRadius: 0
  },
  [theme.breakpoints.down('sm')]: {
    height: 300
  }
}));

const ThumbnailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 31,
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

const Thumbnail = styled(Box)(({ theme }) => ({
  width: 90,
  height: 89,
  borderRadius: 12,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid transparent',
  transition: theme.transitions.create('transform'),
  '&:focus': {
    outline: 'none'
  },
  '&:hover:not(.active)': {
    transform: 'translateY(-5px)'
  },
  '& img:hover': {
    transition: theme.transitions.create('filter')
  },
  '&:hover img': {
    filter: 'opacity(0.5)'
  },
  '&.active': {
    '& img': {
      filter: 'opacity(0.3)'
    },
    borderColor: 'hsl(27, 78%, 56%)'
  }
}));

const images = [
  '/images/image-product-1-thumbnail.jpg',
  '/images/image-product-2-thumbnail.jpg',
  '/images/image-product-3-thumbnail.jpg',
  '/images/image-product-4-thumbnail.jpg'
];

export default function ImageViewer() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImageIndexRef = useRef(activeImageIndex);

  const handleKeydown = (evt: KeyboardEvent) => {
    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight') {
      evt.preventDefault();

      if (evt.key === 'ArrowLeft') activeImageIndexRef.current--;
      else activeImageIndexRef.current++;

      if (activeImageIndexRef.current >= images.length) activeImageIndexRef.current = 0;
      else if (activeImageIndexRef.current < 0) activeImageIndexRef.current = images.length - 1;

      setActiveImageIndex(activeImageIndexRef.current);
    }
  };

  const handleClick = (index: number) => () => {
    setActiveImageIndex(index);
    activeImageIndexRef.current = index;
  };

  return (
    <ImageViewerRoot onKeyDown={handleKeydown}>
      <ActiveImage
        src={`/images/image-product-${activeImageIndex + 1}.jpg`}
        alt='product image'
        width={1000}
        height={1000}
        priority
      />
      <ThumbnailWrapper>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            className={index === activeImageIndex ? 'active' : undefined}
            tabIndex={activeImageIndex === index ? 0 : -1}
          >
            <Image src={image} alt='product thumbnail' fill sizes='176x176' onClick={handleClick(index)} />
          </Thumbnail>
        ))}
      </ThumbnailWrapper>
    </ImageViewerRoot>
  );
}
