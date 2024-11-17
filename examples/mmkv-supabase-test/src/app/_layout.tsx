import { Slot } from 'expo-router'
import { AuthProvider, useAuth } from '../components/auth/AuthProvider'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { storage } from '../lib/storage'

export default function RootLayout() {
  console.log('[RootLayout] - Rendering')
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <AuthStateLogger>
            <Slot />
          </AuthStateLogger>
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

// Separate component to handle auth state logging
function AuthStateLogger({ children }: { children: React.ReactNode }) {
  const { user } = useAuth() // useAuth is used inside AuthProvider

  console.log('[RootLayout] - Redirecting to:', user ? "/(app)/" : "/(auth)/")
  console.log('[RootLayout] - Storage route:', storage?.getString("intended_route"))
  
  return children
}