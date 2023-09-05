import { Box, Skeleton, styled } from '@mui/material';

const Card = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 336,
  background: theme.palette.background.paper,
  borderRadius: 4,
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  boxShadow: '0 0 20px 2px var(--_shadow-color)',
  overflow: 'hidden'
}));

const Flag = styled(Skeleton)(({ theme }) => ({
  height: 160,
  [theme.breakpoints.down('md')]: {
    height: 199
  }
}));

const Content = styled(Box)(() => ({
  padding: '24px'
}));

const Stats = styled(Box)(() => ({
  display: 'grid',
  gap: 5,
  marginTop: 16
}));

export default function CountrySkeleton() {
  return (
    <Card>
      <Flag variant='rectangular' animation='wave' />
      <Content>
        <Skeleton width={110} />
        <Stats>
          <Skeleton width={170} />
          <Skeleton width={160} />
          <Skeleton width={130} />
        </Stats>
      </Content>
    </Card>
  );
}
