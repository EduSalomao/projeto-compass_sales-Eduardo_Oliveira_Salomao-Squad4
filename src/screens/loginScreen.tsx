import React, { useContext } from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { AuthContent } from "../auth/authContent";
import { DataContext } from "../contexts/auth";
import { Login } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";
import { isLogged } from "../validations/authenticateValidations";

export const LoginScreen = ({ navigation }: NavigationProps) => {
  const { user }: any = useContext(DataContext);

  async function loginHandler() {
    if (isInputsValidation("login", user)) {
      await Login(user.email, user.password);
      navigation.navigate("Main");
    } else {
      console.log("dados invalidos");
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
