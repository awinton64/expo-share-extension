import { Redirect, Slot } from 'expo-router'
import { useAuth } from '../../components/auth/AuthProvider'

export default function ProtectedLayout() {
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user) return <Redirect href="/(auth)/" />
  
  return <Slot />
}