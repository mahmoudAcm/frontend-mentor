import { Typography } from '@mui/material';
import { createRef, KeyboardEventHandler, RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Destinations, getDestinations } from '@/src/lib/data';
import {
  Content,
  Description,
  DestinationRoot,
  Details,
  DetailsContent,
  Divider,
  Info,
  InfoList,
  PlantImage,
  Tab,
  Tabs
} from '@/src/components/pages/destination';
import { SecondaryLayoutMainTitle } from '@/src/components/SecondaryLayout';

export default function Destination({ destinations }: { destinations: Destinations }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabFocus = useRef(activeTab);
  const [tabs, setTabs] = useState<RefObject<HTMLDivElement>[]>([]);

  const destination = useMemo(() => {
    if (destinations && destinations.length) return destinations[activeTab];
    return undefined;
  }, [activeTab, destinations]);

  //Update tabs refs
  useEffect(() => {
    if (destinations && destinations.length) setTabs(new Array(destinations.length).fill(0).map(() => createRef()));
  }, [destinations]);

  // update the tabFocus.current value whenever the activeTab prop changes.
  // This is important because we need to keep track of which tab is currently in focus
  useEffect(() => {
    tabFocus.current = activeTab;
  }, [activeTab]);

  const handleTabListKeydown: KeyboardEventHandler<HTMLDivElement> = evt => {
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowLeft') {
      tabs[tabFocus.current].current?.setAttribute('tabindex', '-1');
      if (evt.key === 'ArrowRight') {
        tabFocus.current++;
        // If we're at the end, go to the start
        if (tabFocus.current >= destinations.length) {
          tabFocus.current = 0;
        }
        // Move left
      } else if (evt.key === 'ArrowLeft') {
        tabFocus.current--;
        // If we're at the start, move to the end
        if (tabFocus.current < 0) {
          tabFocus.current = destinations.length - 1;
        }
      }

      tabs[tabFocus.current].current?.setAttribute('tabindex', '0');
      tabs[tabFocus.current].current?.focus();
    }
  };

  return (
    <DestinationRoot>
      <SecondaryLayoutMainTitle num='01'>PICK YOUR DESTINATION</SecondaryLayoutMainTitle>
      <Content>
        <PlantImage src={destination?.images.png ?? ''} width='445' height='445' alt='Planet Image' priority />
        <Details className='flex-col'>
          <Tabs role='tabs'>
            <div role='tablist' onKeyDown={handleTabListKeydown}>
              {destinations
                .map(({ name }) => name)
                .map((tab, idx) => (
                  <Tab
                    id={'tab-' + (idx + 1)}
                    role='tab'
                    aria-selected={idx === activeTab}
                    tabIndex={idx === activeTab ? 0 : -1}
                    aria-controls={'panel-' + (idx + 1)}
                    key={idx}
                    ref={tabs[idx]}
                    onClick={() => {
                      setActiveTab(idx);
                    }}
                    onKeyDown={evt => {
                      if (evt.key === 'Enter') setActiveTab(idx);
                    }}
                  >
                    {tab}
                  </Tab>
                ))}
            </div>
          </Tabs>
          <DetailsContent role='tabpanel' id={'panel-' + (activeTab + 1)} aria-labelledby={'tab-' + (activeTab + 1)}>
            <Typography variant='h2' className='planetName'>
              {destination?.name}
            </Typography>
            <Description color='textSecondary'>{destination?.description}</Description>
            <Divider />
            <InfoList>
              <Info className='flex-col'>
                <Typography variant='subheading2' color='textSecondary'>
                  AVG. DISTANCE
                </Typography>
                <Typography variant='subheading1'>{destination?.distance}</Typography>
              </Info>
              <Info className='flex-col'>
                <Typography variant='subheading2' color='textSecondary'>
                  Est. travel time
                </Typography>
                <Typography variant='subheading1'>{destination?.travel}</Typography>
              </Info>
            </InfoList>
          </DetailsContent>
        </Details>
      </Content>
    </DestinationRoot>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      destinations: getDestinations()
    }
  };
};
