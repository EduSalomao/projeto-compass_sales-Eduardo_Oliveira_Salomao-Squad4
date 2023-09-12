import React from "react";
import { View } from "react-native";
import { globalstyle } from "../../assets/styles/globalstyles";

import { EmailInput } from "../components/emailInput";
import { PassInput } from "../components/passInput";

export const LoginScreen = () => {
  return (
    <View style={globalstyle.page}>
      <View style={globalstyle.inputContainer}>
        <EmailInput />
        <PassInput />
      </View>
    </View>
  );
};
