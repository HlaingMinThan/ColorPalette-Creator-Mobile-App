import Box from "@/components/Box";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  box1: {
    backgroundColor: "#2aa198",
  },
  box2: {
    backgroundColor: "#268bd2",
  },
  box3: {
    backgroundColor: "#d33682",
  },
  box4: {
    backgroundColor: "#cb4b16",
  },
});

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>
        Here are some boxes of different colors
      </Text>
      <Box name="Cyan" code="#2aa198" />
      <Box name="Blue" code="#268bd2" />
      <Box name="Magenta" code="#d33682" />
      <Box name="Orange" code="#cb4b16" />
    </SafeAreaView>
  );
}
