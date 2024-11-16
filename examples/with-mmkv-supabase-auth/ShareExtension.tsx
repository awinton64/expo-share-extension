import { close, type InitialProps } from "expo-share-extension";
import { Button, StyleSheet, Text, View } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import { useEffect, useState } from "react";
import { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import { storage } from "./storage";
import { Auth } from './components/Auth';

export default function ShareExtension({ url, text }: InitialProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [shared] = useMMKVString("shared");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
          {url && <Text style={styles.text}>URL: {url}</Text>}
          {text && <Text style={styles.text}>Text: {text}</Text>}
          <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
          <Button title="Close" onPress={close} />
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
    borderRadius: 20,
    backgroundColor: "#FAF8F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  text: {
    textAlign: "center",
    color: "#313639",
    fontSize: 16,
  },
});
