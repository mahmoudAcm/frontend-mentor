import Notification from './Notification.tsx';

export default function Notifications() {
  return (
    <div className='container mx-auto grid gap-[10px] mt-[24px] px-[16px] md:gap-[8px] md:px-[30px] md:mt-[31px]'>
      <Notification
        full_name='Mark Webber'
        avatar='./images/avatar-mark-webber.webp'
        createdAt='1m ago'
        type='reaction'
        target='post'
        content='My first tournament today!'
      />
      <Notification
        full_name='Angela Gray'
        avatar='./images/avatar-angela-gray.webp'
        createdAt='5m ago'
        type='follow'
      />
      <Notification
        full_name='Jacob Thompson'
        avatar='./images/avatar-jacob-thompson.webp'
        createdAt='1 day ago'
        type='join'
        content='Chess Club'
      />
      <Notification
        full_name='Rizky Hasanuddin'
        avatar='./images/avatar-rizky-hasanuddin.webp'
        type='private-message'
        createdAt='5 days ago'
        content='Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.'
        seen
      />
      <Notification
        full_name='Kimberly Smith'
        avatar='./images/avatar-kimberly-smith.webp'
        type='comment'
        target='picture'
        picture='./images/image-chess.webp'
        createdAt='1 week ago'
        seen
      />
      <Notification
        full_name='Nathan Peterson'
        avatar='./images/avatar-nathan-peterson.webp'
        createdAt='2 weeks ago'
        type='reaction'
        target='post'
        content='5 end-game strategies to increase your win rate'
        seen
      />
      <Notification
        full_name='Anna Kim'
        avatar='./images/avatar-anna-kim.webp'
        createdAt='2 weeks ago'
        type='leave'
        content='Chess Club'
        seen
      />
    </div>
  );
}
