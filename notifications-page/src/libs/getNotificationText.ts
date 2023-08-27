const mapTypeToText = {
  join: 'has joined your group',
  leave: 'left the group',
  follow: 'followed you',
  reaction: {
    comment: 'reacted to your recent comment',
    post: 'reacted to your recent post',
    picture: 'reacted to your recent picture'
  },
  comment: {
    comment: 'commented on your comment',
    post: 'commented on your post',
    picture: 'commented on your picture'
  },
  reply: {
    comment: 'replied on your comment',
    post: 'replied on your post',
    picture: 'replied on your picture'
  },
  'private-message': 'sent you a private message'
};

export default function getNotificationText(type: keyof typeof mapTypeToText, target?: string) {
  if (type === 'reaction' || type === 'comment' || type === 'reply') {
    return (mapTypeToText[type] as Record<string, string>)[target!];
  }
  return mapTypeToText[type];
}
