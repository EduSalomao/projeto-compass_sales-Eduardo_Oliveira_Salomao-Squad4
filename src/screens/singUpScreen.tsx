import React, { useContext } from "react";
import { View, Text } from "react-native";

import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { RegisterContent } from "../auth/resgisterContent";
import { DataContext } from "../contexts/auth";
import { CreateUser } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";

export const SingUpScreen = ({ navigation }: NavigationProps) => {
  const { user } = useContext(DataContext);

  async function singUpHandler() {
    if (isInputsValidation("singup", user)) {
      await CreateUser(user.email, user.password);
      navigation.navigate("Main");
    } else {
      console.log("erro");
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
