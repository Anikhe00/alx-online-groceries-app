import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./button";

const ProductCard = ({
  title,
  price,
  image,
  quantity,
}: {
  title: string;
  quantity: string;
  price: number;
  image: string;
}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>{quantity}</Text>
      </View>
      <View>
        <Text style={styles.productPrice}>${price}</Text>
        <Button>
          <Ionicons name="add" size={24} color="white" />
        </Button>
      </View>
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

export default ProductCard;
