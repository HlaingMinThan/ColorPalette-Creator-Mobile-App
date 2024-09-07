import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import solarized from "@/app/colors/solarized";
import rainbow from "@/app/colors/rainbow";
import frontendmasters from "@/app/colors/frontendmasters";
import PalettePreview from "@/components/PalettePreview";
import { Link } from "expo-router";

export default function Index() {
  let data = [
    { title: "Solarized", route: "solarized", data: solarized.slice(0, 5) },
    { title: "Rainbow", route: "rainbow", data: rainbow },
    {
      title: "Frontend Masters",
      route: "frontendmasters",
      data: frontendmasters,
    },
  ];

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "600",
      paddingVertical: 15,
    },
    headingText: {
      fontWeight: "bold",
      fontSize: 20,
    },
  });

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Link href={`/${item.route}`}>
            <PalettePreview title={item.title} colors={item.data} />
          </Link>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
