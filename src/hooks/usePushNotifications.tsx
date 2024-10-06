import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export function usePushNotifications() {
  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      if (!Constants.isDevice) {
        alert('Push notifications are only supported on physical devices');
        return;
      }

      try {
        // Obtener permisos para notificaciones push
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        // Solicitar permisos si no están concedidos
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }

        // Si no se conceden los permisos, mostrar alerta
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notifications!');
          return;
        }

        // Obtener el token de notificaciones push
        const tokenData = await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.expoProjectId, // Aquí usa expoConfig en lugar de manifest
        });
        const token = tokenData.data;

        console.log('Push token:', token);

        // Aquí puedes enviar el token al backend para almacenar y usar en las notificaciones push
        // await sendPushTokenToBackend(token);

      } catch (error) {
        console.error('Error during push notification registration:', error);
      }

      // Configuración de canal de notificaciones para Android
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    };

    // Llamar al registro de notificaciones al montar el componente
    registerForPushNotificationsAsync();

    // Escuchar las notificaciones cuando la app está abierta
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received in foreground:', notification);
    });

    // Limpiar los listeners al desmontar el componente
    return () => {
      notificationListener.remove();
    };
  }, []);
}
