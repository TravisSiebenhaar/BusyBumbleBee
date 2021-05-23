import React from "react";
import { Text, View } from "react-native";
import styles from "./LoginScreenStyles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the login screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default LoginScreen;
