import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { DataProvider } from "./src/contexts/auth";
import FontLoader from "./src/utils/fontLoader";

import { LoginScreen } from "./src/screens/loginScreen";
import { SingUpScreen } from "./src/screens/singUpScreen";
import { ForgotPassScreen } from "./src/screens/forgotPassScreen";
import { MainScreen } from "./src/screens/mainScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <FontLoader>
          <Stack.Navigator initialRouteName="SingUp">
            <Stack.Screen
              name="SingUp"
              component={SingUpScreen}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#F9F9F9",
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#F9F9F9",
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="Forgot"
              component={ForgotPassScreen}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#F9F9F9",
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: "",
                headerStyle: {
                  backgroundColor: "#F9F9F9",
                  elevation: 0,
                },
              }}
            />
          </Stack.Navigator>
        </FontLoader>
      </DataProvider>
      <StatusBar backgroundColor="#F9F9F9" />
    </NavigationContainer>
  );
}
