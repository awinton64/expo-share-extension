import { Redirect, Slot } from 'expo-router'
import { useAuth } from '../../components/auth/AuthProvider'
import { storage } from '../../lib/storage'

export default function ProtectedLayout() {
    const { user, loading } = useAuth()

    if (loading) return null
    if (!user) return <Redirect href="/(auth)/" />

    const intendedRoute = storage?.getString("intended_route")
    if (intendedRoute) {
        console.log("[ProtectedLayout] Redirecting to intended route:", intendedRoute)
        storage.delete("intended_route") // Clear it after use
        return <Redirect href={intendedRoute} />
    }

    return <Slot />
}