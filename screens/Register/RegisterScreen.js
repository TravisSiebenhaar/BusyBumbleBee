import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native";
import { Input } from "react-native-elements";

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <Input
        placeholder="email@address.com"
        type="Email"
        leftIcon={<Icon name="envelope" size={24} color="black" />}
        // value={email}
        // onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="Password"
        type="Password"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        secureTextEntry={true}
        // value={password}
        // onChangeText={(value) => setPassword(value)}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
