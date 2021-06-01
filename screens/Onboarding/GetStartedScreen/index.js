import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import styles from "./styles";

const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 150, height: 150 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.actionContainer}>
        <Button
          title="Get Started"
          raised
          titleStyle={styles.getStartedTitle}
          containerViewStyle={{ width: 50 }}
        />
        <View style={styles.signIn}>
          <Text style={styles.alreadyMemeber}>Already a member?</Text>
          <Button title="Sign In" type="clear" titleStyle={styles.btnTitle} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
