import { close, openHostApp, type InitialProps } from "expo-share-extension"
import { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native"
import { useMMKVString } from "react-native-mmkv"
import { storage } from "./src/lib/storage"

// Get this from your app.json
const BUNDLE_ID = "com.mymap.app" // Replace with your actual bundle identifier

export default function ShareExtension({ url, text }: InitialProps) {
  // const [shared] = useMMKVString("shared")
  // const [isSaving, setIsSaving] = useState(false)
  // const [autoSaveAttempted, setAutoSaveAttempted] = useState(false)

  // console.log('ShareExtension render:', { url, text, shared, isSaving, autoSaveAttempted })

  // Auto-save attempt
  // useEffect(() => {
  //   console.log('Auto-save effect triggered:', { url, autoSaveAttempted })
  //   if (url && !autoSaveAttempted) {
  //     setAutoSaveAttempted(true)
  //     try {
  //       console.log('Attempting auto-save for URL:', url)
  //       storage.set("shared_url", url)
  //       setTimeout(async () => {
  //         try {
  //           console.log('Opening host app...')
  //           openHostApp(`${BUNDLE_ID}://`)
  //           console.log('Host app opened successfully')
  //           setIsSaving(false) // Reset loading state after success
  //         } catch (error) {
  //           console.error('Failed to open host app:', error)
  //           setIsSaving(false)
  //         }
  //       }, 500)
  //     } catch (error) {
  //       console.error("Auto-save failed:", error)
  //       setIsSaving(false)
  //     }
  //   }
  // }, [url])

  // Manual save backup
  // const handleSave = useCallback(async () => {
  //   console.log('Manual save triggered:', { url })
  //   if (!url) return
    
  //   setIsSaving(true)
  //   try {
  //     console.log('Attempting manual save for URL:', url)
  //     storage.set("shared_url", url)
  //     openHostApp(`${BUNDLE_ID}://`)
  //     setIsSaving(false) // Reset loading state after success
  //   } catch (error) {
  //     console.error("Manual save failed:", error)
  //     setIsSaving(false)
  //   }
  // }, [url])

  const handleOpenHostApp = () => {
    console.log('handleOpenHostApp:', { url })
    openHostApp(`create?url=${url}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Save to MyMap</Text>
      {url && (
        <Text style={styles.text}>
          URL: {url}
        </Text>
      )}
      {/* {isSaving ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Try Again" onPress={handleSave} />
      )} */}
      <Button title="Open MyMap" onPress={handleOpenHostApp} />
    </View>
  )
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
})