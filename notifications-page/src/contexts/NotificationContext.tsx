import { createContext, ReactNode, useEffect, useState } from 'react';
import { Notification, notifications as __notifications } from '../data';
import getNotificationText from '../libs/getNotificationText';

interface State {
  notifications: Notification[];
  unreadCount: number;
  markAllAsRead: () => void;
  addNotification: (notification: Notification) => void;
}

export const NotificationContext = createContext<State | null>(null);

export default function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState(__notifications);
  const [unreadCount, setUnreadCount] = useState(3);

  const markAllAsRead = () => {
    setNotifications(notifications =>
      notifications.map(notification => ({
        ...notification,
        seen: true
      }))
    );
    setUnreadCount(0);
  };

  const addNotification = (notification: Notification) => {
    setNotifications(notifications => [notification, ...notifications]);
    setUnreadCount(count => count + 1);
    const hasTarget = notification.name === 'social-interaction' || notification.name === 'picture-interaction';
    if (window.Notification.permission === 'granted') {
      new window.Notification(notification.full_name, {
        icon: notification.avatar,
        body: getNotificationText(notification.type, hasTarget ? notification.target : undefined)
      });
    }
  };

  useEffect(() => {
    window.Notification.requestPermission();
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, markAllAsRead, unreadCount, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
