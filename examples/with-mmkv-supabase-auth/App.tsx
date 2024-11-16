import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, AppState } from 'react-native';
import { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import { Auth } from './components/Auth';
import { useMMKVString } from 'react-native-mmkv';
import { storage } from './storage';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [shared, setShared] = useMMKVString('shared');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: string) => {
      if (nextAppState === 'active') {
        setShared(storage.getString('shared'));
      }
    });

    return () => {
      subscription.remove();
    };
  }, [setShared]);

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 24, marginBottom: 10 }}>
        With MMKV Supabase Auth Example
      </Text>
      {session && session.user ? (
        <View>
          <Text style={{ color: "#313639", fontFamily: "Inter-Black" }}>
            User ID: {session.user.id}
          </Text>
          <Text style={{ textAlign: "center", color: "#313639", fontSize: 16 }}>
            Shared value: {shared}
          </Text>
          <Button 
            title="Sign Out" 
            onPress={() => supabase.auth.signOut()} 
          />
        </View>
      ) : (
        <Auth />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
