import api from '../services/axiosInstance';
import { generarNombreUsuarioIniciales } from '../utils/generarNombreUsuario';
import { AxiosError } from 'axios';

export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
}

export default class AuthModel {
  static async login(email: string, password: string): Promise<{ success: boolean; token?: string; message?: string }> {
    if (!email || !password) {
      return { success: false, message: 'Credenciales incorrectas' };
    }

    try {
      const result = await api.post('/login', { username: email, password });
      
      if (result.data.success) {
        return { success: true, token: result.data.token };
      } else {
        console.log(result.data);
        return { success: false, message: result.data.message || 'Error en la autenticación' };
      }
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  static async register(email: string, password: string, username: string, phone: string): Promise<{ success: boolean; message: string }> {
    if (!email || !password || !username || !phone) {
      return { success: false, message: 'Todos los campos son obligatorios' };
    }

    const newUserName = generarNombreUsuarioIniciales(username);
    
    try {
      const result = await api.post('/register', { username: newUserName, password, email, phone });
      
      if (result.data.success) {
        return { success: true, message: result.data.message };
      } else {
        console.log(result.data);
        return { success: false, message: result.data.message || 'Error en el registro' };
      }
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  private static handleError(error: unknown): { success: boolean; message: string } {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log('Error status:', error.response.status);
        console.log('Error data:', error.response.data);
        return { success: false, message: error.response.data.message || 'Error en la solicitud' };
      } else {
        console.log('Error sin respuesta del servidor:', error.message);
        return { success: false, message: 'Error de red o servidor no disponible' };
      }
    } else {
      return { success: false, message: 'Error desconocido' };
    }
  }
}
