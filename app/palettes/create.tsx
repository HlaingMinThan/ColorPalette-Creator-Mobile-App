import ColorSwitcher from "@/components/ColorSwitcher";
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import COLORS from "@/app/colors/colors";

const CreatePalette = () => {
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
  return (
    <View style={styles.container}>
      {/* Text Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Name of color palette</Text>
        <TextInput style={styles.input} placeholder="Please type your name" />
      </View>
      <FlatList
        style={styles.colors_container}
        data={COLORS}
        keyExtractor={(item, i) => item.hexCode + i}
        renderItem={({ item }) => <ColorSwitcher color={item} />}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => Alert.alert("hi")} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePalette;
