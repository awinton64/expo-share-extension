import { Slot, Redirect } from 'expo-router'
import { useAuth } from '../../components/auth/AuthProvider'

export default function AuthLayout() {
  const { user, loading } = useAuth()

  if (loading) return null
  if (user) return <Redirect href="/(app)/" />

  return <Slot />
}