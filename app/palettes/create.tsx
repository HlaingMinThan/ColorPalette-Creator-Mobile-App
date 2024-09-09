import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CreatePalette = () => {
  const [number, setNumber] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [showSelection, setShowSelection] = useState(false);

  let styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginVertical: 20,
    },
    inputWrapper: {
      width: "90%",
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
  });
  return (
    <View style={styles.container}>
      {/* Text Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput style={styles.input} placeholder="Please type your name" />
      </View>
      {/* Number Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Number only</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Please type your phone"
          value={number}
          onChangeText={(text) => {
            // Only allow numeric input
            const numericText = text.replace(/[^0-9]/g, "");
            setNumber(numericText);
          }}
        />
      </View>
      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Please type your password"
        />
      </View>
      {/* Textarea Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Paragraph</Text>
        <TextInput
          multiline
          numberOfLines={5}
          style={[styles.input, styles.textarea]}
          placeholder="Please type your paragraph"
        />
      </View>
      {/* Picker Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Selector</Text>
        <Pressable
          style={styles.selectOpener}
          onPress={() => {
            setShowSelection((v) => !v);
          }}
        >
          <Text>Select Language</Text>
        </Pressable>
        {showSelection && (
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        )}
      </View>
    </View>
  );
};

export default CreatePalette;
