import { Box, styled, Typography } from '@mui/material';
import SecondaryLayout, { SecondaryLayoutMainTitle } from '@/src/components/SecondaryLayout';
import Image from 'next/image';
import { createRef, KeyboardEventHandler, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Crew, getCrew } from '@/src/lib/data';

const CrewRoot = styled(SecondaryLayout)(({ theme }) => ({
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    '& .main-title': {
      textAlign: 'center'
    }
  }
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20.5px',
  justifyContent: 'space-between',
  flex: 1,
  [theme.breakpoints.down('lg')]: {
    gap: 0,
    justifyContent: 'center'
  }
}));

const Details = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const Role = styled(Typography)(({ theme }) => ({
  marginTop: '154px',
  marginBottom: '15px',
  textTransform: 'uppercase',
  justifyContent: 'space-between',
  color: 'white',
  opacity: 0.5,
  [theme.breakpoints.down('lg')]: {
    marginTop: '60px',
    marginBottom: '8px'
  }
}));

const Name = styled(Typography)(({ theme }) => ({
  marginBottom: '27px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '16px',
    fontSize: '2.5rem'
  }
}));

const Bio = styled(Typography)(({ theme }) => ({
  maxWidth: '444px',
  marginBottom: '120px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px',
    maxWidth: '458px',
    fontSize: '1rem'
  }
}));

const CrewImageWrapper = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  '& img': {
    height: '100%',
    marginBottom: -10,
    "&[data-order='0']": {
      marginTop: '-47px',
      height: '712px'
    },
    [theme.breakpoints.down('lg')]: {
      height: '532px',
      "&[data-order='0']": {
        height: '572px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '222px !important'
    }
  }
}));

const SlideControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  marginBottom: '94px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px'
  }
}));

const SliderButton = styled(Box)(() => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  background: 'white',
  opacity: 0.17,
  cursor: 'pointer',
  "&[aria-disabled='true']": {
    background: 'white',
    opacity: 1
  }
}));

export default function Crew({ crew }: { crew: Crew }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const tabFocus = useRef(activeSlide);
  const [controls, setControls] = useState<RefObject<HTMLDivElement>[]>([]);

  const member = useMemo(() => {
    if (crew && crew.length) return crew[activeSlide];
    return undefined;
  }, [crew, activeSlide]);

  //Update controls refs
  useEffect(() => {
    if (crew && crew.length) setControls(() => new Array(crew.length).fill(0).map(() => createRef()));
  }, [crew]);

  // update the tabFocus.current value whenever the activeTab prop changes.
  // This is important because we need to keep track of which tab is currently in focus
  useEffect(() => {
    tabFocus.current = activeSlide;
  }, [activeSlide]);

  const handleControlsKeydown: KeyboardEventHandler<HTMLDivElement> = evt => {
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') {
      controls[tabFocus.current].current?.setAttribute('tabindex', '-1');
      if (evt.key === 'ArrowRight') {
        tabFocus.current++;
        // If we're at the end, go to the start
        if (tabFocus.current >= crew.length) {
          tabFocus.current = 0;
        }
        // Move left
      } else if (evt.key === 'ArrowLeft') {
        tabFocus.current--;
        // If we're at the start, move to the end
        if (tabFocus.current < 0) {
          tabFocus.current = crew.length - 1;
        }
      }

      controls[tabFocus.current].current?.setAttribute('tabindex', '0');
      controls[tabFocus.current].current?.focus();
      setActiveSlide(tabFocus.current);
    }
  };

  return (
    <CrewRoot>
      <SecondaryLayoutMainTitle num='02'>MEET YOUR CREW</SecondaryLayoutMainTitle>
      <Content role='region' aria-roledescription='Slider' aria-label='MEET YOUR CREW'>
        <Details className='flex-col'>
          <Role variant='h4'>{member?.role}</Role>
          <Name variant='h3'>{member?.name}</Name>
          <Bio color='textSecondary'>{member?.bio}</Bio>
          <SlideControls role='group' aria-label='Slide controls' onKeyDown={handleControlsKeydown}>
            {crew.map((_, idx) => (
              <SliderButton
                key={idx}
                ref={controls[idx]}
                role='button'
                aria-label={`Show slide ${activeSlide + 1} of ${crew.length}`}
                aria-disabled={idx === activeSlide ? 'true' : 'false'}
                tabIndex={idx === activeSlide ? 0 : -1}
                onClick={() => {
                  setActiveSlide(idx);
                }}
              />
            ))}
          </SlideControls>
        </Details>
        <CrewImageWrapper hidden>
          <Image
            data-order={activeSlide}
            src={member?.images.png ?? ''}
            alt='crew image'
            //@ts-ignore
            width={member?.images.width}
            //@ts-ignore
            height={member?.images.height}
            priority
          />
        </CrewImageWrapper>
      </Content>
    </CrewRoot>
  );
}

export function getStaticProps() {
  return {
    props: {
      crew: getCrew()
    }
  };
}
