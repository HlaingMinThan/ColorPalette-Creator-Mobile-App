import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PalettePreview from "@/components/PalettePreview";
import { router, useLocalSearchParams } from "expo-router";
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

  const { name, selectedColors } = useLocalSearchParams<{
    name?: string;
    selectedColors?: string;
  }>();

  useEffect(() => {
    if (name && selectedColors) {
      let colors: Color[] = JSON.parse(String(selectedColors));
      setPalettes((prev) => {
        return [
          {
            id: prev.length + 1,
            paletteName: name,
            colors,
          },
          ...prev,
        ];
      });
    }
  }, [name, selectedColors]);

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
    buttonContainer: {
      alignItems: "flex-start",
      marginHorizontal: 10,
    },
    button: {
      padding: 10,
      backgroundColor: "indigo",
      borderRadius: 10,
      width: "100%",
    },
    buttonText: {
      color: "#ffffff",
      textAlign: "center",
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/palettes/create")}
        >
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
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
