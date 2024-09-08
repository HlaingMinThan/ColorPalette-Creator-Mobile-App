import ColorPalette from "@/components/ColorPalette";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

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

  let { id } = useLocalSearchParams();
  let paletteId: number = Number(id);

  let fetchColorPalettes = useCallback(async () => {
    let res = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes",
    );
    let data = await res.json();
    let palette: Palette = data.find((item: Palette) => item.id === paletteId);
    setPalette(palette);
  }, [paletteId]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return <ColorPalette title={palette.paletteName} colors={palette.colors} />;
}
