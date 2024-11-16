import { close, type InitialProps } from "expo-share-extension"
import { Button, StyleSheet, Text, View } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { storage } from "../lib/storage"

export default function ShareExtension({ url, text }: InitialProps) {
  const [shared] = useMMKVString("shared")

  // Store URL when it's received
  if (url) {
    storage.set("shared_url", url)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        With MMKV Example
      </Text>
      <Text style={styles.text}>
        Persisted value: {shared}
      </Text>
      {url && (
        <Text style={styles.text}>
          URL: {url}
        </Text>
      )}
      {text && (
        <Text style={styles.text}>
          Text: {text}
        </Text>
      )}
      <Button
        title="Update persisted value"
        onPress={() => {
          storage.set("shared", "Hi from share extension")
        }}
      />
      <Button title="Close" onPress={close} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
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