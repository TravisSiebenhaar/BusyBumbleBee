import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Image, Button } from "react-native-elements";

const AppInitializer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          // source={{ uri: "" }}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.actionContainer}>
        <Button title="Get Started" titleStyle={styles.fontSize} raised />
        <View style={styles.signInContainer}>
          <Text style={styles.fontSize}>Already a member?</Text>
          <Button title="Sign In" type="clear" titleStyle={styles.fontSize} />
        </View>
      </View>
    </View>
  );
};

export default AppInitializer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  actionContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  signInContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  fontSize: {
    fontSize: 21,
  },
});
