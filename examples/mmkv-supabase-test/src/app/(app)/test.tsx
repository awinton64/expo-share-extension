import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { storage } from "../../lib/storage"
import BottomSheet from "@gorhom/bottom-sheet"
import { useCallback, useMemo, useRef, useState } from "react"
import { useAuth } from "../../components/auth/AuthProvider"
import { supabase } from "../../config/supabase"

export default function Test() {
  const { url } = useLocalSearchParams()
  const { user } = useAuth()
  const [notes, setNotes] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  
  // Bottom sheet setup
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], [])

  const handleSave = async () => {
    if (!user) return
    setIsSaving(true)
    
    try {
      const { error } = await supabase
        .from('saved_content')
        .insert([
          {
            user_id: user.id,
            content_url: url || storage.getString("shared_url"),
            notes,
            created_at: new Date().toISOString(),
          }
        ])
      
      if (error) throw error
      
      // Clear the form
      setNotes("")
      // Optional: close the bottom sheet
      bottomSheetRef.current?.close()
      
    } catch (error) {
      console.error("Error saving content:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Save Content</Text>
        
        <View style={styles.urlContainer}>
          <Text style={styles.label}>URL</Text>
          <Text style={styles.url} numberOfLines={2}>
            {url || storage.getString("shared_url")}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            value={notes}
            onChangeText={setNotes}
            placeholder="Add your notes here..."
          />
        </View>

        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSave}
          disabled={isSaving}
        >
          <Text style={styles.saveButtonText}>
            {isSaving ? "Saving..." : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#313639",
  },
  urlContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#313639",
  },
  url: {
    fontSize: 14,
    color: "#666",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
