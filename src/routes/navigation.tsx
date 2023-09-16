import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/mainScreen";
import { LoginScreen } from "../screens/loginScreen";
import { SignUpScreen } from "../screens/singUpScreen";
import { ForgotPasswordScreen } from "../screens/forgotPassScreen";
import { isAuthenticated } from "../utils/authServices";

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verifique se o usuário está autenticado
  useEffect(() => {
    async function checkAuthentication() {
      const authenticated = await isAuthenticated();
      setIsLoggedIn(authenticated);
    }

    checkAuthentication();
  }, []);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Main" : "Login"}>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
