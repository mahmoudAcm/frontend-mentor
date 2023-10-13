type ReactionCommentReplyMessage = Record<string, string>;

type MapTypeToText = ReactionCommentReplyMessage | string;

const mapTypeToText: Record<string, MapTypeToText> = {
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

function isReactionCommentReplyMessage(message: MapTypeToText): message is ReactionCommentReplyMessage {
  return typeof message !== 'string';
}

function getNotificationText(type: keyof typeof mapTypeToText, target?: string) {
  const messageType = mapTypeToText[type];

  if (target && isReactionCommentReplyMessage(messageType)) {
    return messageType[target] || '';
  }

  return (messageType as string) || '';
}

export default getNotificationText;
