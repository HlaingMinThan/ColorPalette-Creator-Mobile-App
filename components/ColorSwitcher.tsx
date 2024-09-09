import { StyleSheet, Switch, Text, View } from "react-native";
import SmallBox from "./navigation/SmallBox";
import { useState } from "react";

interface Color {
  colorName: string;
  hexCode: string;
}
const ColorSwitcher = ({
  color,
  colorSwithOnFor,
}: {
  color: Color;
  colorSwithOnFor: Function;
}) => {
  let [isSwitchOn, setIsSwitchOn] = useState(false);
  const styles = StyleSheet.create({
    colorSwitcherWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "96%",
      marginTop: 10,
    },
    seperator: {
      height: 10,
      borderBottomWidth: 1,
      borderColor: "gray",
    },
  });
  return (
    <>
      <View style={styles.colorSwitcherWrapper}>
        <Text>{color.colorName}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SmallBox code={color.hexCode} />
          <Switch
            value={isSwitchOn}
            onValueChange={() => {
              let updateValue = !isSwitchOn;
              setIsSwitchOn(updateValue);
              colorSwithOnFor(color, updateValue);
            }}
          />
        </View>
      </View>
      <View style={styles.seperator} />
    </>
  );
};

export default ColorSwitcher;
