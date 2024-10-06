import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Header from '../components/Header'
import { useAuthViewModel } from '@/src/viewmodel/AuthViewModel'

export default function _layout() {
    const router = useRouter()
    const {logoutUser} = useAuthViewModel()
  return (
   <Stack>
    <Stack.Screen name='notification' options={{
          title: 'Notificaciones',
          header: () => (
            <Header
              title="Notificaciones"
              showBackButton ={true}
              onBackPress={() => router.push('/(tabs)')}
              rightIcon="log-out-outline"
              onRightIconPress={logoutUser}
            />
          ),
        }} />
   </Stack>
  )
}

