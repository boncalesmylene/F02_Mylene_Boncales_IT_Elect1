import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Counter from "./Counter";
import ColorChanger from "./ColorChanger";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>My App</Text>
      <Counter />
      <View style={styles.separator} />
      <ColorChanger />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  separator: {
    height: 2,
    backgroundColor: "#eee",
    width: "80%",
    marginVertical: 20,
  },
});
