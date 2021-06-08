import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import AppInitializerScreen from "./screens/AppInitializer";

const Stack = createStackNavigator();
const isSignedIn = false;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            console.log("Signed in")
          ) : (
            // Home app for use.
            <Stack.Screen
              name="AppInitializer"
              component={AppInitializerScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
