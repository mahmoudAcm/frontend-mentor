'use client';

import { Box, IconButton, styled } from '@mui/material';
import Image from 'next/image';
import { KeyboardEvent, useRef, useState } from 'react';
import PrevIcon from '@/src/icons/PrevIcon';
import NextIcon from '@/src/icons/NextIcon';
import useImageViewer from '@/src/app/(ImageViewer)/useImageViewer';

const ImageViewerRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: 445,
  '&.dialog ': {
    width: 550,
    margin: 'auto',
    '& .ActiveImage': {
      width: 550,
      height: 550
    },
    '& .ThumbnailWrapper': {
      justifyContent: 'space-around'
    }
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));
const ActiveImage = styled(Image)(({ theme }) => ({
  width: 445,
  height: 445,
  borderRadius: 13,
  userSelect: 'none',
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
  background: 'white',
  userSelect: 'none',
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

const SliderButton = styled(IconButton)(({ theme }) => ({
  width: 56,
  height: 56,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'white',
  display: 'none',
  marginLeft: 16,
  marginRight: 16,
  '&:nth-of-type(2)': {
    right: 0
  },
  '& path': {
    transition: theme.transitions.create('stroke')
  },
  '&:hover': {
    background: 'white !important',
    '& path': {
      stroke: 'hsl(27, 78%, 56%)'
    }
  },
  '&.dialog-slider-button': {
    display: 'inline-flex',
    margin: 0,
    '&:nth-of-type(1)': {
      left: 56 / -2
    },
    '&:nth-of-type(2)': {
      right: 56 / -2
    }
  },
  [theme.breakpoints.down('lg')]: {
    display: 'inline-flex'
  },
  [theme.breakpoints.down('md')]: {
    width: 40,
    height: 40,
    '& svg': {
      width: '10px !important',
      height: '14px !important'
    }
  }
}));

const images = [
  '/images/image-product-1-thumbnail.jpg',
  '/images/image-product-2-thumbnail.jpg',
  '/images/image-product-3-thumbnail.jpg',
  '/images/image-product-4-thumbnail.jpg'
];

export default function ImageViewer(props: { className?: string; activeImageIndex: number }) {
  const { openImageViewerDialog } = useImageViewer();
  const [activeImageIndex, setActiveImageIndex] = useState(
    Math.max(0, Math.min(images.length - 1, props.activeImageIndex))
  );
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

  const sliderButtonClassName = (props.className ? props.className + '-' : '') + 'slider-button';

  const handlePrev = () => {
    activeImageIndexRef.current--;
    if (activeImageIndexRef.current < 0) activeImageIndexRef.current = images.length - 1;
    setActiveImageIndex(activeImageIndexRef.current);
  };

  const handleNext = () => {
    activeImageIndexRef.current++;
    if (activeImageIndexRef.current >= images.length) activeImageIndexRef.current = 0;
    setActiveImageIndex(activeImageIndexRef.current);
  };

  return (
    <ImageViewerRoot onKeyDown={handleKeydown} className={props.className}>
      <Box sx={{ position: 'relative' }}>
        <SliderButton className={sliderButtonClassName} onClick={handlePrev}>
          <PrevIcon />
        </SliderButton>
        <SliderButton className={sliderButtonClassName} onClick={handleNext}>
          <NextIcon />
        </SliderButton>
        <ActiveImage
          className='ActiveImage'
          src={`/images/image-product-${activeImageIndex + 1}.jpg`}
          alt='product image'
          width={1000}
          height={1000}
          priority
          onClick={openImageViewerDialog(activeImageIndex)}
        />
      </Box>
      <ThumbnailWrapper className='ThumbnailWrapper'>
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
