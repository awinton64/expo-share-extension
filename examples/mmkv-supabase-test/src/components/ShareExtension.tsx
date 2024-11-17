import { type InitialProps, close, openHostApp } from "expo-share-extension";
import { useCallback, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { storage } from "../lib/storage";

export default function ShareExtension({ url }: InitialProps) {
  console.log('[ShareExtension] - Component Mounted with URL:', url)
  // const [isLoading, setIsLoading] = useState(true);
  // const [showMessage, setShowMessage] = useState(false);
  // const [urlProcessed, setUrlProcessed] = useState(false);

  storage.set("intended_route", `/(app)/test?url=${url}`);
  openHostApp(`/(app)/test?url=${url}`);

  // const processUrl = useCallback((targetUrl: string) => {
  //   storage.set("shared_url", targetUrl);
  //   storage.set("intended_route", `/(app)/test?url=${targetUrl}`);
  //   console.log('[ShareExtension] - Opening host app:', `/(app)/test?url=${targetUrl}`)
  //   console.log('[ShareExtension] - Storage route:', storage.getString("intended_route"))
  //   openHostApp(`/(app)/test?url=${targetUrl}`);
  // }, []);

  // const handleOpenHostApp = useCallback(() => {
  //   if (url) {
  //     processUrl(url);
  //   }
  // }, [url, processUrl]);

  // useEffect(() => {
  //   if (url) {
  //     setShowMessage(true);
  //     processUrl(url);
      
  //     // Hide message after 1.5 seconds
  //     const timer = setTimeout(() => {
  //       setShowMessage(false);
  //       setIsLoading(false);
  //       setUrlProcessed(true);
  //     }, 1500);

  //     return () => clearTimeout(timer);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [url, processUrl]);

  // if (isLoading) {
  //   return (
  //     <View style={styles.container}>
  //       {showMessage && <Text style={styles.title}>Nice pick! Loading...</Text>}
  //       <ActivityIndicator size="large" color="#000" />
  //     </View>
  //   );
  // }

  return 
  // (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>Share Example</Text>
  //     {url ? (
  //       <>
  //         <Text style={styles.text}>URL: {url}</Text>
  //         {urlProcessed && (
  //           <Button title="Open and Save" onPress={handleOpenHostApp} />
  //         )}
  //       </>
  //     ) : (
  //       <Text style={styles.text}>No URL provided</Text>
  //     )}
  //     <Button title="Close" onPress={close} />
  //   </View>
  // );
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