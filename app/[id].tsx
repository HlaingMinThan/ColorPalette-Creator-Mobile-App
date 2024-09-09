import ColorPalette from "@/components/ColorPalette";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

export default function Palettes() {
  interface Color {
    colorName: string;
    hexCode: string;
  }
  interface Palette {
    id: number;
    paletteName: string;
    colors: Color[];
  }

  let [palette, setPalette] = useState<Palette>({} as Palette);

  const { paletteName, colors } = useLocalSearchParams<{
    paletteName?: string;
    colors?: string;
  }>();

  console.log(paletteName, colors);
  useEffect(() => {
    if (paletteName && colors) {
      console.log("hit");
      setPalette((prev) => {
        return {
          id: prev.id,
          paletteName: paletteName,
          colors: JSON.parse(String(colors)),
        };
      });
    }
  }, [paletteName, colors]);

  return <ColorPalette title={palette.paletteName} colors={palette.colors} />;
}
