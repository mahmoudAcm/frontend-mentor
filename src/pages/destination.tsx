import { Container, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
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

export default function Destination({ destinations }: { destinations: Destinations }) {
  const [activeTab, setActiveTab] = useState(0);

  const destination = useMemo(() => {
    if (destinations && destinations.length) return destinations[activeTab];
    return undefined;
  }, [activeTab, destinations]);

  return (
    <Container>
      <DestinationRoot className='flex-col'>
        <Typography variant='h5' className='title'>
          <span className='number'>01</span>
          <span>PICK YOUR DESTINATION</span>
        </Typography>
        <Content>
          <PlantImage src={destination?.images.png ?? ''} width='445' height='445' alt='Planet Image' priority />
          <Details className='flex-col'>
            <Tabs role='tabs'>
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
                    onClick={() => {
                      setActiveTab(idx);
                    }}
                  >
                    {tab}
                  </Tab>
                ))}
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
    </Container>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      destinations: getDestinations()
    }
  };
};
