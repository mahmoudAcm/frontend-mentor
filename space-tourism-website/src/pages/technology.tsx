import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { SecondaryLayoutMainTitle } from '@/src/components/SecondaryLayout';
import {
  Content,
  ControlButton,
  Controls,
  Description,
  Details,
  DetailsContent,
  Name,
  StyledImage,
  TechnologyRoot
} from '@/src/components/pages/technology';
import { getTechnologies, Technologies } from '@/src/lib/data';
import { createRef, KeyboardEventHandler, RefObject, useEffect, useMemo, useRef, useState } from 'react';

export default function Technology({ technologies }: { technologies: Technologies }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(() => theme.breakpoints.up('lg'));
  const [activeSlide, setActiveSlide] = useState(0);
  const tabFocus = useRef(activeSlide);
  const [slides, setSlides] = useState<RefObject<HTMLDivElement>[]>([]);

  const imageOrientation = !isDesktop ? 'landscape' : 'portrait';
  const imageSizes = isDesktop ? { width: 515, height: 527 } : { width: 768, height: 310 };

  const technology = useMemo(() => {
    if (technologies && technologies.length) return technologies[activeSlide];
    return undefined;
  }, [technologies, activeSlide]);

  //Update slides refs
  useEffect(() => {
    if (technologies && technologies.length) setSlides(new Array(technologies.length).fill(0).map(() => createRef()));
  }, [technologies]);

  // update the tabFocus.current value whenever the activeTab prop changes.
  // This is important because we need to keep track of which tab is currently in focus
  useEffect(() => {
    tabFocus.current = activeSlide;
  }, [activeSlide]);

  const handleControlsKeydown: KeyboardEventHandler = evt => {
    evt.stopPropagation();
    const conditions = {
      c1: (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') && !isDesktop,
      c2: (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') && isDesktop
    };

    if (conditions.c1 || conditions.c2) {
      slides[tabFocus.current].current?.setAttribute('tabindex', '-1');
      if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
        tabFocus.current++;
        // If we're at the end, go to the start
        if (tabFocus.current >= technologies.length) {
          tabFocus.current = 0;
        }
        // Move left
      } else if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
        tabFocus.current--;
        // If we're at the start, move to the end
        if (tabFocus.current < 0) {
          tabFocus.current = technologies.length - 1;
        }
      }

      slides[tabFocus.current].current?.setAttribute('tabindex', '0');
      slides[tabFocus.current].current?.focus();
      setActiveSlide(tabFocus.current);
    }
  };

  return (
    <TechnologyRoot>
      <SecondaryLayoutMainTitle num='03'>SPACE LAUNCH 101</SecondaryLayoutMainTitle>
      <Content role='region' aria-label='SPACE LAUNCH 101'>
        <Details>
          <Controls className='flex-col' role='group' aria-label='Slider Controls' onKeyDown={handleControlsKeydown}>
            {technologies.map((_, idx) => (
              <ControlButton
                role='button'
                aria-current={activeSlide === idx ? 'true' : 'false'}
                tabIndex={activeSlide === idx ? 0 : -1}
                key={idx}
                ref={slides[idx]}
                onClick={() => {
                  setActiveSlide(idx);
                }}
              >
                {idx + 1}
              </ControlButton>
            ))}
          </Controls>
          <DetailsContent
            className='flex-col'
            role='group'
            aria-label={`slide ${activeSlide + 1} of ${technologies.length}`}
          >
            <Typography variant='nav' color='textSecondary' className='title'>
              THE TERMINOLOGY…
            </Typography>
            <Name variant='h3'>{technology?.name}</Name>
            <Description color='textSecondary'>{technology?.description}</Description>
          </DetailsContent>
        </Details>
        <StyledImage
          src={technology?.images.portrait.replace('portrait', imageOrientation) ?? ''}
          width={imageSizes.width}
          height={imageSizes.height}
          alt='Tech Image'
          priority
        />
      </Content>
    </TechnologyRoot>
  );
}

export function getStaticProps() {
  return {
    props: {
      technologies: getTechnologies()
    }
  };
}
