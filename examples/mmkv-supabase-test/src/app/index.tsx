import { Redirect } from 'expo-router'
import { useAuth } from '../components/auth/AuthProvider'
import { storage } from '../lib/storage'
import { useEffect } from 'react'

export default function Index() {
  const { user, loading } = useAuth()

  // useEffect(() => {
  //   // Force a re-render when the app opens
  //   const intendedRoute = storage.getString("intended_route")
  //   if (intendedRoute && user) {
  //     console.log('[Index] - Deleting intended route:', intendedRoute)
  //     storage.delete("intended_route")
  //     return
  //   }
  // }, [user])

  if (loading) return null
  
  // const intendedRoute = storage.getString("intended_route")
  // if (intendedRoute && user) {
  //   storage.delete("intended_route")
  //   return <Redirect href={intendedRoute} />
  // }
  
  // console.log('[Index] - Redirecting to:', user ? "/(app)/" : "/(auth)/")
  // console.log('[Index] - Storage route:', storage?.getString("intended_route"))
  return <Redirect href={user ? "/(app)/" : "/(auth)/"} />
}