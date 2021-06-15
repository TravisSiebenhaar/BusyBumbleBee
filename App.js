import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import AppInitializerScreen from "./screens/AppInitializer";
import HomeScreen from "./screens/Home";
import OnBoardingScreen from "./screens/OnBoarding/OnBoarding";

const Stack = createStackNavigator();
const isSignedIn = false;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            // Home app for use.
            <Stack.Screen
              name="AppInitializer"
              component={AppInitializerScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{
              headerBackTitle: "Back",
              headerTitle: false,
              headerStyle: {
                shadowOpacity: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
