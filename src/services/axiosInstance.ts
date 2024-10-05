import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://car-go-api-production.up.railway.app', // Cambia esto por tu URL de backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token de autenticación a todas las solicitudes
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('token'); // Usar AsyncStorage en lugar de localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error obteniendo el token de AsyncStorage', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
