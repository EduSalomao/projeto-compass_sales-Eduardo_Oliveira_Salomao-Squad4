import React from "react";
import { View, Text } from "react-native";

import { globalstyle } from "../../assets/styles/globalstyles";
import { EmailInput } from "../components/Inputs/emailInput";
import { InsertButton } from "../components/Buttons/insertButton";

export const ForgotPassScreen = () => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Forgot Password</Text>
      <EmailInput />
      <InsertButton buttonTitle="SEND" />
    </View>
  );
};
