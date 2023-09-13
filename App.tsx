import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { LoginScreen } from "./src/screens/loginScreen";
import { SingUpScreen } from "./src/screens/singUpScreen";
import { ForgotPassScreen } from "./src/screens/forgotPassScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingUp">
        <Stack.Screen
          name="SingUp"
          component={SingUpScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPassScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
