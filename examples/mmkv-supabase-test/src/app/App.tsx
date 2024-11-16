import { View } from "react-native"
import { AuthProvider } from "../components/auth/AuthProvider"
import LoginScreen from "../components/auth/LoginScreen"
import MainApp from "./MainApp"
import { useAuth } from "../components/auth/AuthProvider"

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return <View />
  }

  return user ? <MainApp /> : <LoginScreen />
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

