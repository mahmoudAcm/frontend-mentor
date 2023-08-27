import getNotificationText from './libs/getNotificationText';

type UserActivity = {
  name: 'user-activity';
  type: 'join' | 'leave' | 'private-message';
  content: string;
};

type FollowerNotification = { name: 'follower-notification'; type: 'follow' };

type SocialInteraction = {
  name: 'social-interaction';
  type: 'reaction' | 'comment' | 'reply';
  target: 'comment' | 'post';
  content: string;
};

type PictureInteraction = {
  name: 'picture-interaction';
  type: SocialInteraction['type'];
  target: 'picture';
  picture: string;
};

export type NotificationProps = { full_name: string; avatar: string; createdAt: string; seen?: boolean } & (
  | UserActivity
  | FollowerNotification
  | SocialInteraction
  | PictureInteraction
);

export default function Notification(props: NotificationProps) {
  const getGroupNameClassName = () =>
    props.type === 'join' || props.type === 'leave' ? 'text-[hsl(219,85%,26%)]' : undefined;

  const badge = !props.seen ? (
    <span className='badge | inline-flex ml-[6px] w-[8px] h-[8px] rounded-full bg-[hsl(1,90%,64%)]'></span>
  ) : (
    <></>
  );

  const showAlert = () => {
    alert('Still under development.');
  };

  const hasTarget = props.name === 'picture-interaction' || props.name === 'social-interaction';

  return (
    <div
      className={[
        'notification | min-h-[80px] flex text-[0.875rem] leading-[calc(18/14)] p-[16px] rounded-[8px] md:px-[20px] md:pt-[18px] md:text-[1rem] md:leading-[calc(21/16)]',
        !props.seen ? 'bg-[hsl(210,60%,98%)]' : undefined
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img src={props.avatar} alt='avatar image' className='w-[39px] h-[39px]' />
      <div className='flex-1 font-medium ml-[13px] md:ml-[19px]'>
        <p className='notification-body | text-[hsl(219,12%,42%)]'>
          <span
            className='font-extrabold text-[hsl(224,21%,14%)] cursor-pointer hover:text-[hsl(219,85%,26%)]'
            onClick={showAlert}
          >
            {props.full_name}
          </span>
          <span className='text-[hsl(219,12%,42%)] ml-[6px]'>
            {getNotificationText(props.type, hasTarget ? props.target : undefined)}
          </span>
          {props.type === 'follow' || props.type === 'private-message' || props.name === 'picture-interaction' ? (
            badge
          ) : (
            <span
              className={[
                'font-bold ml-[6px] cursor-pointer hover:text-[hsl(219,85%,26%)] break-all break-words',
                getGroupNameClassName()
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={showAlert}
            >
              {props.content}
              {badge}
            </span>
          )}
        </p>
        <span className='text-[hsl(219,14%,63%)] mt-[3px]'>{props.createdAt}</span>
        {props.type === 'private-message' ? (
          <p
            className='text-[hsl(219,12%,42%)] mt-[12px] p-[16px] border rounded-[5px] cursor-pointer transition-colors md:px-[20px] md:py-[17px] hover:bg-[hsl(211,68%,94%)] hover:border-[hsl(205,33%,90%)]  break-words'
            onClick={showAlert}
          >
            {props.content}
          </p>
        ) : (
          <></>
        )}
      </div>
      {/* if the target was a picture we just show the picture not the content */}
      {props.name === 'picture-interaction' ? (
        <img
          src={props.picture}
          alt='picture'
          className='cursor-pointer w-[39px] h-[39px] md:w-[45px] md:h-[45px] ml-[8px] rounded-[7px]'
          onClick={showAlert}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
