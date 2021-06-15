import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";

const OnBoardingItem = ({ slide }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={{ uri: slide.imageUrl }}
        style={[styles.image, { width }]}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>text: {slide.text}</Text>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 2,
  },
  image: {
    height: 250,
  },
});
