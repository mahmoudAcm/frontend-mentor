import { NotificationProps } from './Notification';

export const profiles = [
  { id: '1', name: 'Mark Webber', avatar: './images/avatar-mark-webber.webp' },
  { id: '2', name: 'Angela Gray', avatar: './images/avatar-angela-gray.webp' },
  { id: '3', name: 'Jacob Thompson', avatar: './images/avatar-jacob-thompson.webp' },
  { id: '4', name: 'Rizky Hasanuddin', avatar: './images/avatar-rizky-hasanuddin.webp' },
  { id: '5', name: 'Kimberly Smith', avatar: './images/avatar-kimberly-smith.webp' },
  { id: '6', name: 'Nathan Peterson', avatar: './images/avatar-nathan-peterson.webp' },
  { id: '7', name: 'Anna Kim', avatar: './images/avatar-anna-kim.webp' }
];

export const notifications: NotificationProps[] = [
  {
    name: 'social-interaction',
    full_name: 'Mark Webber',
    avatar: './images/avatar-mark-webber.webp',
    createdAt: '1m ago',
    type: 'reaction',
    target: 'post',
    content: 'My first tournament today!'
  },
  {
    name: 'follower-notification',
    full_name: 'Angela Gray',
    avatar: './images/avatar-angela-gray.webp',
    createdAt: '5m ago',
    type: 'follow'
  },
  {
    name: 'user-activity',
    full_name: 'Jacob Thompson',
    avatar: './images/avatar-jacob-thompson.webp',
    createdAt: '1 day ago',
    type: 'join',
    content: 'Chess Club'
  },
  {
    name: 'user-activity',
    full_name: 'Rizky Hasanuddin',
    avatar: './images/avatar-rizky-hasanuddin.webp',
    type: 'private-message',
    createdAt: '5 days ago',
    content:
      'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    seen: true
  },
  {
    name: 'picture-interaction',
    full_name: 'Kimberly Smith',
    avatar: './images/avatar-kimberly-smith.webp',
    type: 'comment',
    target: 'picture',
    picture: './images/image-chess.webp',
    createdAt: '1 week ago',
    seen: true
  },
  {
    name: 'social-interaction',
    full_name: 'Nathan Peterson',
    avatar: './images/avatar-nathan-peterson.webp',
    createdAt: '2 weeks ago',
    type: 'reaction',
    target: 'post',
    content: '5 end-game strategies to increase your win rate',
    seen: true
  },
  {
    name: 'user-activity',
    full_name: 'Anna Kim',
    avatar: './images/avatar-anna-kim.webp',
    createdAt: '2 weeks ago',
    type: 'leave',
    content: 'Chess Club',
    seen: true
  }
];

export type Notification = NotificationProps;

export const pics = [
  {
    id: '1',
    url: './images/pics/6-200x200.jpg'
  },
  {
    id: '2',
    url: './images/pics/299-200x200.jpg'
  },
  {
    id: '3',
    url: './images/pics/519-200x200.jpg'
  },
  {
    id: '4',
    url: './images/pics/564-200x200.jpg'
  },
  {
    id: '5',
    url: './images/pics/733-200x200.jpg'
  },
  {
    id: '6',
    url: './images/pics/939-200x200.jpg'
  },
  {
    id: '7',
    url: './images/pics/959-200x200.jpg'
  },
  {
    id: '8',
    url: './images/pics/1077-200x200.jpg'
  }
];
