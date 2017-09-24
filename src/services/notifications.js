import { notification } from 'antd';

export const NOTIFY_SUCCESS = 'success';
export const NOTIFY_INFO = 'info';
export const NOTIFY_WARNING = 'warning';
export const NOTIFY_ERROR = 'error';

export function showNotification(type, title, description) {
  notification[type]({
    message: title,
    description,
  });
}
