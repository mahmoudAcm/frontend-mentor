import { ReactElement, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthContext from '@/src/hooks/useAuthContext';

interface AuthGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

export default function AuthGuard(props: AuthGuardProps) {
  const router = useRouter();
  const { status } = useAuthContext();
  const { children, fallback } = props;

  useEffect(() => {
    if (!router.isReady) return;
    if (status === 'unauthenticated') router.replace(`/demo?next=${router.asPath}`).then();
  }, [router, status]);

  if (status !== 'authenticated') return fallback;

  return <>{children}</>;
}
