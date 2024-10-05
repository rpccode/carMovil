import { Tabs, useRouter } from 'expo-router';
import Header from '../components/Header';
import { useAuthViewModel } from '@/src/viewmodel/AuthViewModel';
// Asegúrate de que la ruta sea correcta

export default function TabsLayout() {
  const router = useRouter()
  const {logoutUser} = useAuthViewModel()
  return (
    <Tabs>
      {/* Pantalla de inicio */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Veiculos',
          header: () => (
            <Header
              title="Inicio"
              rightIcon="log-out-outline"
              onRightIconPress={logoutUser}
            />
          ),
        }}
      />

      {/* Pantalla de perfil */}
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'Reservaciones',
          header: () => (
            <Header
              title="Reservaciones"
              rightIcon="log-out-outline"
              onRightIconPress={logoutUser}
            />
          ),
        }}
      />

      {/* Pantalla de ajustes */}
      <Tabs.Screen
        name="payment"
        options={{
          title: 'Pagos',
          header: () => (
            <Header
              title="Pagos"
              rightIcon="log-out-outline"
              onRightIconPress={logoutUser}
            />
          ),
        }}
      />
    </Tabs>
  );
}
