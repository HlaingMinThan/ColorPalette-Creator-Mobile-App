import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PalettePreview from "@/components/PalettePreview";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
  interface Color {
    colorName: string;
    hexCode: string;
  }
  interface Palette {
    id: number;
    paletteName: string;
    colors: Color[];
  }

  let [palettes, setPalettes] = useState<Palette[]>([]);
  let [isRefreshing, setIsRefreshing] = useState(false);

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

  let fetchColorPalettes = useCallback(async () => {
    setIsRefreshing(true);
    let res = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes",
    );
    let data = await res.json();
    setPalettes(data);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <SafeAreaView>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={fetchColorPalettes}
        style={styles.container}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/${item.id}`)}>
            <PalettePreview
              title={item.paletteName}
              colors={item.colors.slice(0, 5)}
            />
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
