import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useAuth } from './AuthProvider'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signUp } = useAuth()

  const handleSignIn = async () => {
    try {
      await signIn(email, password)
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Login failed')
    }
  }

  const handleSignUp = async () => {
    try {
      await signUp(email, password)
      Alert.alert('Success', 'Check your email for verification')
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Signup failed')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
}) 