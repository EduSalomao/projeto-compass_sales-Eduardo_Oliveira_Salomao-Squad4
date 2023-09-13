import React from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";
import { NameInput } from "../components/Inputs/nameInput";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";

export const SingUpScreen = ({ navigation }: NavigationProps) => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Sing Up</Text>
      <View style={globalstyle.inputContainer}>
        <NameInput />
        <EmailInput />
        <PassInput />
      </View>
      <NavigateButton
        navigation={navigation}
        text="Already have an account?"
        pageDestination="Login"
      />
      <View>
        <InsertButton buttonTitle="SING UP" />
      </View>
    </View>
  );
};
