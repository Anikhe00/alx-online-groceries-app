import { Image, StyleSheet, Text, View } from "react-native";

const ProductCard = ({
  title,
  price,
  image,
}: {
  title: string;
  price: number;
  image: string;
}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#030303",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#7C7C7C",
  },
});
