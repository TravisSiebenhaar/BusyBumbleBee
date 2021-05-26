import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import styles from "./LoginScreenStyles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  const registerFillIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <StatusBar style="auto" />
        <View>
          <Input
            placeholder="email@address.com"
            type="Email"
            leftIcon={<Icon name="envelope" size="24" color="black" />}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            placeholder="Password"
            type="Password"
            leftIcon={<Icon name="lock" size="24" color="black" />}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Button title="Login" onPress={signIn} buttonStyle={styles.button} />
          <Button
            title="Register"
            type="outline"
            onPress={registerFillIn}
            buttonStyle={styles.button}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
