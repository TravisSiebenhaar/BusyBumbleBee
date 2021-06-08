import React from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";

const OnBoardingItem = ({ text }) => {
  console.log("text", text);
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Text>text: {text}</Text>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
