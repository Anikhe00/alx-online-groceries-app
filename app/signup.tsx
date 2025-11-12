import InputField from "@/components/inputField";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.body}>Enter your credentials to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <InputField
            value={username}
            title="Username"
            onChangeText={setUsername}
          />
          <InputField value={email} title="Email" onChangeText={setEmail} />
          <InputField
            value={password}
            title="Password"
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.caption}>By continuing you agree to our</Text>
          <Text style={styles.captionLink}>Terms of Service</Text>
          <Text style={styles.caption}>and</Text>
          <Text style={styles.captionLink}>Privacy Policy.</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(home)")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.textGroupCenter}>
          <Text style={styles.caption}>Already have an account?</Text>
          <Text
            style={styles.captionLink}
            onPress={() => router.push("/login")}
          >
            Log In
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 40,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "flex-start",
    gap: 14,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#030303",
  },
  body: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#7C7C7C",
  },
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
  form: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 24,
  },
  formGroup: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 24,
  },
  textGroup: {
    width: "100%",
    flexWrap: "wrap",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },
  textGroupCenter: {
    width: "100%",
    flexWrap: "wrap",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  caption: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#7C7C7C",
    letterSpacing: 0.5,
  },
  captionLink: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#53B175",
    letterSpacing: 0.5,
  },
  buttonGroup: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 24,
  },
});
