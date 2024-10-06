import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import NotificationModel from '../model/NotificationModel';
import { Notification } from 'expo-notifications'; // Importa el tipo Notification

export default class NotificationViewModel {
  private notificationModel: NotificationModel;

  constructor() {
    this.notificationModel = new NotificationModel();
  }

  async registerForPushNotificationsAsync(): Promise<string | undefined> {
    if (!Device.isDevice) {
      alert('Las notificaciones push solo funcionan en dispositivos físicos');
      return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permiso de notificaciones denegado.');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    this.notificationModel.setToken(token);
    return token;
  }

  addNotificationListeners(
    setNotification: React.Dispatch<React.SetStateAction<Notification | null>> // Cambiado a tipo Notification
  ) {
    // Listener para recibir notificaciones
    Notifications.addNotificationReceivedListener(notification => {
      this.notificationModel.setNotification(notification);
      setNotification(notification); // Aquí se asegura que el tipo sea Notification
    });

    // Listener para la respuesta de notificaciones
    Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Respuesta de notificación:', response);
    });
  }

  getNotificationModel() {
    return this.notificationModel;
  }
}
