import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps } from "../interfaces";

const Button = ({ title, children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#53B175",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#ffffff",
    textAlign: "center",
  },
});
