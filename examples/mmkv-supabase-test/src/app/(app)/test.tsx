import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { storage } from "../../lib/storage"
import { useRef, useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function Test() {
  const { url } = useLocalSearchParams();
  const router = useRouter();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClearAndNavigate = () => {
    storage.delete("shared_url");
    router.push("/(app)/");
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
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
        </BottomSheetView>
      </BottomSheet>
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
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
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
