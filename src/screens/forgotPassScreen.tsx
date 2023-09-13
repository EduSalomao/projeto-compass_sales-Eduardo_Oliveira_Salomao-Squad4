import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { globalstyle } from "../../assets/styles/globalstyles";

import { EmailInput } from "../components/emailInput";

export const ForgotPassScreen = () => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Forgot Password</Text>
      <EmailInput />
      <StatusBar />
    </View>
  );
};
