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

type NotificationBase = { full_name: string; avatar: string; createdAt: string; seen?: boolean };

type NotificationProps = NotificationBase &
  (UserActivity | FollowerNotification | SocialInteraction | PictureInteraction);
