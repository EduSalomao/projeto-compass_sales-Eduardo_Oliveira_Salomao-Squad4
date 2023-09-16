import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/mainScreen";
import { LoginScreen } from "../screens/loginScreen";
import { SignUpScreen } from "../screens/singUpScreen";
import { ForgotPasswordScreen } from "../screens/forgotPassScreen";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9F9F9",
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="chevron-back-outline" size={32} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9F9F9",
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}></TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9F9F9",
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="chevron-back-outline" size={32} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: "#F9F9F9",
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="menu-outline"
                size={32}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
