import React, { useContext } from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { AuthContent } from "../auth/authContent";
import { DataContext } from "../contexts/auth";
import { Login } from "../utils/auth";
import {
  isValidEmail,
  isValidPassword,
} from "../validations/inputsValidations";

export const LoginScreen = ({ navigation }: NavigationProps) => {
  const { user }: any = useContext(DataContext);

  async function loginHandler() {
    if (isValidEmail(user.email) && isValidPassword(user.password)) {
      await Login(user.email, user.password);
      console.log("DEU CERTO DISGRAÇA");
    }
  }
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Login</Text>
      <View style={globalstyle.inputContainer}>
        <AuthContent />
        <NavigateButton
          navigation={navigation}
          text="Forgot your password?"
          pageDestination="Forgot"
        />
        <InsertButton buttonTitle="LOGIN" onPress={loginHandler} />
      </View>
    </View>
  );
};
