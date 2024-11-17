import { Slot } from 'expo-router'
import { AuthProvider } from '../components/auth/AuthProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </GestureHandlerRootView>
  )
}