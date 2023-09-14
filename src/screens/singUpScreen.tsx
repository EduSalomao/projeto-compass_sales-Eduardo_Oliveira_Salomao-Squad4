import React, { useContext } from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { RegisterContent } from "../auth/resgisterContent";
import { DataContext } from "../contexts/auth";
import { CreateUser } from "../utils/auth";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
} from "../validations/inputsValidations";

export const SingUpScreen = ({ navigation }: NavigationProps) => {
  const { user }: any = useContext(DataContext);

  async function singUpHandler() {
    if (
      isValidEmail(user.email) &&
      isValidName(user.name) &&
      isValidPassword(user.password)
    ) {
      await CreateUser(user.email, user.password);
      console.log("DEU CERTO DISGRAÇA");
    }
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
        <InsertButton buttonTitle="SING UP" onPress={singUpHandler} />
      </View>
    </View>
  );
};
