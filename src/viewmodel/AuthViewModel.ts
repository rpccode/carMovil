import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router"; // Importa useRouter
import { loginSuccess, logout } from "../store/slices/authSlice";
import AuthModel from "../model/AuthModel";
import { useAppSelector } from "../store/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthViewModel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter(); // Inicializa useRouter
  const token = useAppSelector((state) => state.auth.token);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await AuthModel.login(email, password);

      if (!result || !result.success) {
        setError(result?.message || "Credenciales incorrectas");
        return { success: false };
      }
      // Guardar token en AsyncStorage
      await AsyncStorage.setItem('@auth_token', result.token || '');
      // Disparar la acción de loginSuccess con el token
      dispatch(
        loginSuccess({
          token: result.token || "",
        })
      );
      return { success: true, token: result.token };
    } catch (e) {
      console.log(e);
      setError("Ocurrió un error al intentar iniciar sesión");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    username: string,
    phone: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const result = await AuthModel.register(email, password, username, phone);
      if (!result || !result.success) {
        setError(result?.message || "Error desconocido en el registro");
        return { success: false };
      }
      return { success: true, message: result.message };
    } catch (e) {
      setError("Ocurrió un error al intentar registrarse");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    console.log('entro');
    await AsyncStorage.removeItem('@auth_token');
    dispatch(logout()); // Llamar al logout en el estado global
    router.push('/auth/login'); // Redirigir al login o a la pantalla deseada
  };

  return { login, register, logoutUser, loading, error, token };
};
