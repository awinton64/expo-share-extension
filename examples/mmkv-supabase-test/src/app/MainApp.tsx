import { Button, StyleSheet, Text, View } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { useAuth } from '../components/auth/AuthProvider'

export default function MainApp() {
  const [sharedUrl] = useMMKVString("shared_url")
  const { signOut, user } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome {user?.email}
      </Text>
      {sharedUrl && (
        <Text style={styles.text}>
          Shared URL: {sharedUrl}
        </Text>
      )}
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