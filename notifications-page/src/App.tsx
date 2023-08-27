import Notifications from './Notifications.tsx';
import AddNotificationDialog from './AddNotificationDialog';
import useNotificationContext from './hooks/useNotificationContext';

export default function App() {
  const { unreadCount, markAllAsRead } = useNotificationContext();
  return (
    <div className='mx-auto bg-white font-base md:max-w-[730px] md:mt-[63px] md:mb-[89px] md:rounded-[15px]'>
      <div className='container mx-auto flex items-center justify-between px-[16px] pt-[24px] md:px-[30px] md:pt-[33px]'>
        <h1 className='text-[1.25rem] leading-[1.25] text-[hsl(224,21%,14%)] font-extrabold flex items-center'>
          Notifications
          {unreadCount ? (
            <span className='inline-flex min-w-[32px] min-h-[25px] rounded-[6px] bg-[hsl(219,85%,26%)] text-white text-[1rem] leading-[calc(20/16)] p-[1px_11px_4px] ml-[9px]'>
              {unreadCount}
            </span>
          ) : (
            <></>
          )}
        </h1>
        <span
          className='text-[0.875rem] leading-[calc(18/14)] text-[hsl(219,12%,42%)] cursor-pointer hover:text-[hsl(219,85%,26%)]'
          onClick={markAllAsRead}
        >
          Mark all as read
        </span>
      </div>
      <Notifications />
      <AddNotificationDialog />
    </div>
  );
}
