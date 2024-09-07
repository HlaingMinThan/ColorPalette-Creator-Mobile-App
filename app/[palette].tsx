import ColorPalette from "@/components/ColorPalette";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import solarized from "@/app/colors/solarized";
import rainbow from "@/app/colors/rainbow";
import frontendmasters from "@/app/colors/frontendmasters";

export default function Palettes() {
  let { palette } = useLocalSearchParams();

  let paletteName: string = String(palette);

  let colors: {
    colorName: string;
    hexCode: string;
  }[] = [];

  if (palette === "solarized") {
    colors = solarized;
  }
  if (palette === "rainbow") {
    colors = rainbow;
  }
  if (palette === "frontendmasters") {
    colors = frontendmasters;
  }

  return <ColorPalette title={paletteName} colors={colors} />;
}
