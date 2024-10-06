import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import NotificationViewModel from '@/src/viewmodel/NotificationViewModel';
import * as Notifications from 'expo-notifications';
import { sendPushNotification } from '@/src/services/PushNotificationService';

// Usa el tipo Notification proporcionado por expo-notifications
type ExpoNotification = Notifications.Notification;

export default function Notification() {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<ExpoNotification | null>(null);

  const notificationViewModel = new NotificationViewModel();

  useEffect(() => {
    notificationViewModel.registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationViewModel.addNotificationListeners(setNotification);
  }, []);
console.log(expoPushToken)
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Token de Expo Push:</Text>
      <Text style={{ marginBottom: 20 }}>{expoPushToken}</Text>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>Notificación Recibida:</Text>
      {notification ? (
        <View>
          <Text>Título: {notification.request.content.title}</Text>
          <Text>Cuerpo: {notification.request.content.body}</Text>
        </View>
      ) : (
        <Text>No se han recibido notificaciones aún</Text>
      )}

      <Button title="Enviar Notificación de Prueba" onPress={() => {
        // Puedes usar un servicio para enviar una notificación de prueba
        console.log('Enviar notificación de prueba');
        sendPushNotification(expoPushToken || '', {
          title: 'Notificación de Prueba',
          body: 'Este es un mensaje de prueba',
        })
      }} />
    </ScrollView>
  );
}
