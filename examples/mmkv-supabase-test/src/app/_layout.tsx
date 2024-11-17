import { Slot } from 'expo-router'
import { AuthProvider } from '../components/auth/AuthProvider'

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}