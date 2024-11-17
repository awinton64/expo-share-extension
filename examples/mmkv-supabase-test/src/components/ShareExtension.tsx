import { type InitialProps, close, openHostApp } from "expo-share-extension";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { storage } from "../lib/storage";

export default function ShareExtension({ url }: InitialProps) {
  const handleOpenHostApp = useCallback(() => {
    if (url) {
      storage.set("shared_url", url);
      openHostApp(`/test?url=${url}`);
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Example</Text>
      {url ? (
        <Text style={styles.text}>URL: {url}</Text>
      ) : null}
      <Button title="Open Host App" onPress={handleOpenHostApp} />
      <Button title="Close" onPress={close} />
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
});