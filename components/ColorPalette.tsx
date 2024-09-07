import Box from "@/components/Box";
import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

interface ColorItem {
  colorName: string;
  hexCode: string;
}
export default function ColorPalette({
  title,
  colors,
}: {
  title: string;
  colors: ColorItem[];
}) {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<Text style={styles.headingText}>{title}</Text>}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <Box name={item.colorName} code={item.hexCode} />
      )}
    ></FlatList>
  );
}
