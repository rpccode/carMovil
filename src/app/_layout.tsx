import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { usePushNotifications } from '../hooks/usePushNotifications';

export default function Layout() {
  usePushNotifications();
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack
        
        >
          {/* Stack for Authentication Screens */}
          <Stack.Screen name="auth/login" options={{ headerShown: false }} />
          <Stack.Screen name="auth/register" options={{ headerShown: false }} />

          {/* Stack for Tabs */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(views)" options={{ headerShown: false }} />

        </Stack>
      </PersistGate>
    </Provider>
  );
}
