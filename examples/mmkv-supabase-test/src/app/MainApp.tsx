import { useCallback } from "react"
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { useAuth } from '../components/auth/AuthProvider'
import { storage } from "../lib/storage"

export default function MainApp() {
  const [shared] = useMMKVString("shared")
  const { signOut, user } = useAuth()

  const enterText = useCallback(() => {
    Alert.prompt(
      "Enter persisted value",
      "This value will be stored in MMKV",
      (text) => {
        storage.set("shared", text)
      },
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome {user?.email}
      </Text>
      <Text style={styles.text}>
        Persisted value: {shared}
      </Text>
      <Button title="Enter persisted value" onPress={enterText} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontFamily: "Inter-Black",
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    color: "#313639",
    fontSize: 16,
    marginBottom: 10,
  },
}) 