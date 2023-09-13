import React from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";

export const LoginScreen = ({ navigation }: NavigationProps) => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Login</Text>
      <View style={globalstyle.inputContainer}>
        <EmailInput />
        <PassInput />
        <NavigateButton
          navigation={navigation}
          text="Forgot your password?"
          pageDestination="Forgot"
        />
        <InsertButton buttonTitle="LOGIN" />
      </View>
    </View>
  );
};
