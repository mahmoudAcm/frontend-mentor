import CountryCard from '@/src/components/CountryCard';

export default function Countries() {
  return (
    <>
      {new Array(10).fill(0).map((_, index) => (
        <CountryCard key={index} />
      ))}
    </>
  );
}
