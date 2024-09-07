import { StyleSheet, View } from "react-native";

export default function SmallBox({ code }: { code: string }) {
  let boxColor = {
    backgroundColor: code,
  };
  const styles = StyleSheet.create({
    box: {
      padding: 10,
      width: 40,
      height: 40,
      marginVertical: 8,
      alignItems: "center",
      marginHorizontal: 10,
    },
  });
  return <View style={[styles.box, boxColor]}></View>;
}
