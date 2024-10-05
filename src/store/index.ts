import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para React Native
import { combineReducers } from 'redux';
import { PersistConfig } from 'redux-persist/es/types';
import authReducer from './slices/authSlice';

// Configuración para redux-persist
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // Solo persistimos el estado auth
};

// Configurar rootReducer con combineReducers
const rootReducer = combineReducers({
  auth: authReducer, // Aquí no necesitas el `.reducer` porque authReducer ya es el reducer.
});

// Persistencia del reducer
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

// Configuración de la store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Deshabilitar verificación de serializabilidad
    }),
});

// Configurar el persistor
export const persistor = persistStore(store);

// Tipos de la store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
