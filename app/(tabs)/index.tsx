import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  box: {
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    color: "#fff",
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
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.box, styles.box4]}>
        <Text style={styles.text}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
}
