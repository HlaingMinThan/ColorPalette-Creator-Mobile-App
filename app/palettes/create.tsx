import ColorSwitcher from "@/components/ColorSwitcher";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import COLORS from "@/app/colors/colors";
import { useState } from "react";
import { router } from "expo-router";
interface Color {
  colorName: string;
  hexCode: string;
}
const CreatePalette = () => {
  let [name, setName] = useState("");
  let [selectedColors, setSelectedColors] = useState<Color[]>([]);

  let styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginVertical: 20,
    },
    inputWrapper: {
      width: "95%",
      marginVertical: 5,
    },
    inputText: {
      marginBottom: 10,
    },
    input: {
      padding: 5,
      borderWidth: 1,
      borderColor: "gray",
      height: 30,
      marginLeft: 5,
    },
    textarea: {
      height: 80,
    },
    picker: {
      paddingBottom: 50,
    },
    selectOpener: {
      padding: 5,
      borderWidth: 1,
      borderColor: "gray",
    },
    colors_container: {
      height: "80%",
      marginTop: 20,
    },
    buttonContainer: {
      marginTop: 20,
      width: "80%",
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

  let submit = () => {
    if (!name) {
      Alert.alert("Please type a name");
      return;
    }
    if (selectedColors.length < 3) {
      Alert.alert("Please select at least 3 colors");
      return;
    }
    router.navigate({
      pathname: "/",
      params: { name, selectedColors: JSON.stringify(selectedColors) },
    });
  };
  return (
    <View style={styles.container}>
      {/* Text Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Name of color palette</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Please type your name"
        />
      </View>
      <FlatList
        style={styles.colors_container}
        data={COLORS}
        keyExtractor={(item, i) => item.hexCode + i}
        renderItem={({ item }) => (
          <ColorSwitcher
            color={item}
            colorSwithOnFor={(color: Color, isOn: boolean) => {
              if (isOn) {
                setSelectedColors([...selectedColors, color]);
              } else {
                setSelectedColors(
                  selectedColors.filter((c) => c.hexCode !== color.hexCode),
                );
              }
            }}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={submit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePalette;
