import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { supabase } from '../lib/supabase';

export function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    console.log('Starting auth flow...');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('Auth response:', error ? 'Error' : 'Success');

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Logged in successfully!');
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Signed up successfully!');
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? "Loading..." : "Sign in"}
          onPress={signInWithEmail}
          disabled={loading}
        />
        <Button
          title={loading ? "Loading..." : "Sign up"}
          onPress={signUpWithEmail}
          disabled={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
}); 