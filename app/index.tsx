import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo_image}
        source={require("../assets/images/app_logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
  },
  logo_image: {
    width: 260,
    height: 64,
  },
});

export default Index;
