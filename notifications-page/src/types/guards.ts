type Merge<T> = T & NotificationBase;

export function isUserActivity(notification: NotificationProps): notification is Merge<UserActivity> {
  return notification.name === 'user-activity';
}

export function isFollowerNotification(notification: NotificationProps): notification is Merge<FollowerNotification> {
  return notification.name === 'follower-notification';
}

export function isSocialInteraction(notification: NotificationProps): notification is Merge<SocialInteraction> {
  return notification.name === 'social-interaction';
}

export function isPictureInteraction(notification: NotificationProps): notification is Merge<PictureInteraction> {
  return notification.name === 'picture-interaction';
}
