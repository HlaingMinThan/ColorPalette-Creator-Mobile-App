import { FlatList } from "react-native";
import SmallBox from "./navigation/SmallBox";
import { StyleSheet, Text } from "react-native";

interface ColorItem {
  colorName: string;
  hexCode: string;
}
const PalettePreview = ({
  title,
  colors,
}: {
  title: string;
  colors: ColorItem[];
}) => {
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    headingText: {
      fontWeight: "bold",
      fontSize: 20,
    },
  });
  return (
    <FlatList
      style={styles.container}
      numColumns={5}
      ListHeaderComponent={<Text style={styles.headingText}>{title}</Text>}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => <SmallBox code={item.hexCode} />}
    />
  );
};

export default PalettePreview;
