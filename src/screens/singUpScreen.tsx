import React, { useState } from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { CreateUser } from "../utils/auth";
import { RegisterContent } from "../auth/resgisterContent";

export const SingUpScreen = ({ navigation }: NavigationProps) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function singUpHandler(email: any, password: any) {
    setIsAuthenticating(true);
    await CreateUser(email, password);
    setIsAuthenticating(false);
  }

  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Sing Up</Text>
      <View style={globalstyle.inputContainer}>
        <RegisterContent />
      </View>
      <NavigateButton
        navigation={navigation}
        text="Already have an account?"
        pageDestination="Login"
      />
      <View>
        <InsertButton buttonTitle="SING UP" onTouch />
      </View>
    </View>
  );
};
