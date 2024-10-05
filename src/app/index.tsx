import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('@auth_token');
        console.log(token)
        if (token) {
          // Si hay token, restablecer el estado de autenticación
          dispatch(loginSuccess({ token }));
          router.push('/(tabs)/home'); // Navegar a la pantalla de inicio
        } else {
          router.push('/auth/login'); // Si no hay token, ir al login
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
      }
    };

    checkAuthStatus();
    setIsMounted(true); // Asegurarse de que el componente esté montado
  }, [dispatch, router]);

  return null;
}
