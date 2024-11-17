import { Redirect } from 'expo-router'
import { useAuth } from '../components/auth/AuthProvider'
import { storage } from '../lib/storage'
import { useEffect } from 'react'

export default function Index() {
  console.log('[Index] - Rendering')
  const intendedRoute = storage?.getString("intended_route")
  const { user, loading } = useAuth()

  if (loading) return null

  // Check for intended route first
  if (intendedRoute && user) {
    console.log('[Index] - Found intended route:', intendedRoute)
    storage.delete("intended_route")
    return <Redirect href={intendedRoute} />
  }

  return <Redirect href={user ? "/(app)/" : "/(auth)/"} />
}