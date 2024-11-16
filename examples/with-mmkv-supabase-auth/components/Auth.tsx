import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { supabase } from '../lib/supabase';

export function Auth() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'expo.modules.shareextension.withmmkvsupabaseauth://'
      }
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Check your email for the login link!');
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
      <Button
        title={loading ? "Loading..." : "Sign in"}
        onPress={signInWithEmail}
        disabled={loading}
      />
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
}); 