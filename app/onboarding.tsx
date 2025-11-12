import Button from "@/components/button";
import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image_background}
        resizeMode="cover"
        source={require("../assets/images/bg_image.png")}
      >
        <View style={styles.content}>
          <Image
            style={{ width: 48, height: 56 }}
            source={require("../assets/images/logoMark.png")}
          />

          <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Text style={styles.header}>Welcome to our store</Text>
            <Text style={styles.body}>
              Get your groceries in as fast as one hour
            </Text>
          </View>

          <Button title="Get Started" onPress={() => router.replace("/signup")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo_image: {
    width: 260,
    height: 64,
  },
  image_background: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 100,
    gap: 40,
  },
  header: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#ffffff",
    textAlign: "center",
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
});
