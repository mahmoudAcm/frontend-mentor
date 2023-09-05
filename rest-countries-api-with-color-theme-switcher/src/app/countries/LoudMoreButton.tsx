'use client';

import { Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoudMoreButton({ limit, countriesCount }: { limit: number; countriesCount: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  //when the route changes this means the data has been loaded
  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  const increaseLimit = () => {
    setLoading(true);
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set('limit', Math.min(limit + 10, countriesCount) + '');
    const search = urlSearchParams.toString();
    router.replace('?' + search, {
      scroll: false
    });
  };

  return (
    <Button onClick={increaseLimit} disabled={loading}>
      {loading ? 'Ioading countries...' : 'Load More'}
    </Button>
  );
}
