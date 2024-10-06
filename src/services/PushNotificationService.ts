import axios from 'axios';

interface MessageData {
  title: string;
  body: string;
  data?: object;
}

export const sendPushNotification = async (expoPushToken: string, messageData: MessageData) => {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: messageData.title,
    body: messageData.body,
    data: messageData.data,
  };

  try {
    const response = await axios.post('https://exp.host/--/api/v2/push/send', message);
    console.log('Notificación enviada:', response.data);
  } catch (error) {
    console.error('Error al enviar notificación:', error);
  }
};
