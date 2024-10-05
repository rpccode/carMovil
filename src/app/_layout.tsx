import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Layout() {
  
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
        </Stack>
      </PersistGate>
    </Provider>
  );
}
