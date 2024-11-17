import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { useAuth } from '../../components/auth/AuthProvider'
import { useRouter } from 'expo-router'

export default function Index() {
  const [sharedUrl] = useMMKVString("shared_url")
  const { signOut, user } = useAuth()
  const router = useRouter()

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

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => router.push('/(app)/test')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
    addButton: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      width: 50,
      height: 50,
      backgroundColor: '#007AFF',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addButtonText: {
      color: 'white',
      fontSize: 35,
      lineHeight: 35,
    },
  })