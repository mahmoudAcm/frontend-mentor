import NotificationSkeleton from '@/src/components/Notifications/NotificationSkeleton';
import { useRouter } from 'next/router';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';
import WelcomeMessageSkeleton from '@/src/components/Notifications/WelcomeMessageSkeleton';

export default function LoadingScreen() {
  const router = useRouter();
  const { isFetching } = useNotificationsSelector();

  const loading = isFetching || !router.isReady;

  if (!loading) return <></>;

  return (
    <>
      <NotificationSkeleton />
      <NotificationSkeleton />
      <NotificationSkeleton />
      <WelcomeMessageSkeleton />
    </>
  );
}
