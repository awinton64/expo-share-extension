import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { storage } from "../../lib/storage"

export default function Test() {
  const { url } = useLocalSearchParams();
  const router = useRouter();

  const handleClearAndNavigate = () => {
    storage.delete("shared_url");
    router.push("/(app)/");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => router.push("/(app)/")}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      <Text style={styles.text}>This is a test file</Text>
      <Text style={styles.text}>local search params URL: {url}</Text>
      <Text style={styles.text}>mmkv shared URL: {storage.getString("shared_url")}</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleClearAndNavigate}
      >
        <Text style={styles.addButtonText}>Clear & Return</Text>
      </TouchableOpacity>
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
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#313639'
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  }
})
