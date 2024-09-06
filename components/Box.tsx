import { StyleSheet, Text, View } from "react-native";

export default function Box({ name, code }: { name: string; code: string }) {
  let boxColor = {
    backgroundColor: code,
  };
  const styles = StyleSheet.create({
    box: {
      padding: 10,
      marginVertical: 8,
      alignItems: "center",
    },
    text: {
      color: "#fff",
    },
  });
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>
        {name}: #{code}
      </Text>
    </View>
  );
}
