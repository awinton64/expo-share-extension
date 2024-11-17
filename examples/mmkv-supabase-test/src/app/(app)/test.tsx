import { StyleSheet, Text, View } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { storage } from "../../lib/storage"

export default function Test() {
  const { url } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a test file</Text>
      <Text style={styles.text}>local search params URL: {url}</Text>
      <Text style={styles.text}>mmkv shared URL: {storage.getString("shared_url")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F5'
  },
  text: {
    fontSize: 16,
    color: '#313639'
  }
})
