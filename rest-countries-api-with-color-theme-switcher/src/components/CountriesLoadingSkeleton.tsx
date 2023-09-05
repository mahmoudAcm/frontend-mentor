import CountrySkeleton from '@/src/components/CountrySkeleton';

const dummyList = new Array(10).fill(0);

export default function CountriesLoadingSkeleton() {
  return dummyList.map((_, index) => <CountrySkeleton key={index} />);
}
