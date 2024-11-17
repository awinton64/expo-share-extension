import { StyleSheet, Text, View } from "react-native"

export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a test file</Text>
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
  text: {
    fontSize: 16,
    color: '#313639'
  }
})
