import { Slot, Redirect } from 'expo-router'
import { useAuth } from '../../components/auth/AuthProvider'
import { storage } from '../../lib/storage'

export default function AuthLayout() {
  const { user, loading } = useAuth()

  if (loading) return null
  if (user) {
    const intendedRoute = storage.getString("intended_route")
    if (intendedRoute) {
      storage.delete("intended_route") // Clear it after use
      return <Redirect href={intendedRoute} />
    }
    return <Redirect href="/(app)/" />
  }

  return <Slot />
}