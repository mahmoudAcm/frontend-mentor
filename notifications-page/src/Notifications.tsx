import Notification from './Notification';
import useNotificationContext from './hooks/useNotificationContext';

export default function Notifications() {
  const { notifications } = useNotificationContext();

  return (
    <div className='container mx-auto grid pb-12 gap-[10px] mt-[24px] px-[16px] md:gap-[8px] md:px-[30px] md:mt-[31px] md:pb-0'>
      {notifications.map((notification, index) => (
        <Notification {...notification} key={index} />
      ))}
    </div>
  );
}
