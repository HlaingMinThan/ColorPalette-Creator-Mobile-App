import { StyleSheet, View } from "react-native";

export default function SmallBox({
  width = 40,
  height = 40,
  style,
  code,
}: {
  width?: number;
  height?: number;
  style?: object;
  code: string;
}) {
  let boxColor = {
    backgroundColor: code,
  };
  const styles = StyleSheet.create({
    box: {
      padding: 10,
      width: width,
      height: height,
      marginVertical: 8,
      alignItems: "center",
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: "#000000",
    },
  });
  return <View style={[style, styles.box, boxColor]}></View>;
}
