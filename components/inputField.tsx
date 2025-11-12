import { StyleSheet, Text, TextInput, View } from "react-native";
import { InputFieldProps } from "../interfaces";

export default function InputField({
  title,
  placeholder,
  value,
  onChangeText,
}: InputFieldProps) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.body}>{title}</Text>

      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 8,
  },
  body: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#7C7C7C",
  },
  inputField: {
    width: "100%",
    height: 36,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    fontSize: 18,
    fontWeight: "medium",
    color: "#030303",
  },
});
