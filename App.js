import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Admin from "./src/Screens/Admin";
export default function App() {
  return (
    <View style={styles.container}>
      <Admin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
