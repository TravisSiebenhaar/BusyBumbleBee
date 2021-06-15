import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PaginatorDots from "../../components/PaginatorDots";
import OnBoardingItem from "./OnBoardingItem";
import slides from "./OnBoardingSlides";

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnBoardingItem slide={item} />}
      />
      <PaginatorDots data={slides} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
