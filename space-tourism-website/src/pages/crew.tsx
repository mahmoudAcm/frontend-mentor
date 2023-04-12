import { SecondaryLayoutMainTitle } from '@/src/components/SecondaryLayout';
import Image from 'next/image';
import { createRef, KeyboardEventHandler, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Crew, getCrew } from '@/src/lib/data';
import {
  Bio,
  Content,
  ControlButton,
  Controls,
  CrewImageWrapper,
  CrewRoot,
  Details,
  Name,
  Role
} from '@/src/components/pages/crew';
import { Box } from '@mui/material';

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
          <Box>
            <Role variant='h4'>{member?.role}</Role>
            <Name variant='h3'>{member?.name}</Name>
            <Bio color='textSecondary'>{member?.bio}</Bio>
          </Box>
          <Controls role='group' aria-label='Slide controls' onKeyDown={handleControlsKeydown}>
            {crew.map((_, idx) => (
              <ControlButton
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
          </Controls>
        </Details>
        <CrewImageWrapper>
          <Image
            data-order={activeSlide}
            src={member?.images.png ?? ''}
            alt='crew image'
            width={member?.images.width}
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
