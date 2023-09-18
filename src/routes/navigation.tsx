import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/mainScreen";
import { LoginScreen } from "../screens/loginScreen";
import { SignUpScreen } from "../screens/signUpScreen";
import { ForgotPasswordScreen } from "../screens/forgotPassScreen";
import { isAuthenticated } from "../utils/authServices";
import { SplashScreen } from "../screens/splashScreen";

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuthentication, setIsCheckingAuthentication] =
    useState(true);

  useEffect(() => {
    async function checkAuthentication() {
      const authenticated = await isAuthenticated();
      setIsLoggedIn(authenticated);
      setIsCheckingAuthentication(false);
    }

    setTimeout(() => {
      checkAuthentication();
    }, 2000);
  }, []);

  if (isCheckingAuthentication) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Main" : "SignUp"}>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F9F9F9",
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F9F9F9",
          },
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F9F9F9",
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
