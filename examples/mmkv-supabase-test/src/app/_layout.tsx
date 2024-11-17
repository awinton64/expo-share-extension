import { Slot } from 'expo-router'
import { AuthProvider } from '../components/auth/AuthProvider'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}