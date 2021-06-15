import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PaginatorDots = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        return <View style={styles.dot} key={i} />;
      })}
    </View>
  );
};

export default PaginatorDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 46,
    borderColor: "green",
    borderWidth: 2,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});
