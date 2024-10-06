export default class NotificationModel {
    token: string = '';
    notification: object | null = null;
  
    setToken(token: string) {
      this.token = token;
    }
  
    setNotification(notification: object) {
      this.notification = notification;
    }
  }
  