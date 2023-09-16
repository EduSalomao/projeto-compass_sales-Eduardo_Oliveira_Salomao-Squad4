import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/navigation";

import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { AuthContent } from "../auth/authContent";
import { DataContext } from "../contexts/inputsData";
import { Login } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { user }: any = useContext(DataContext);

  async function loginHandler() {
    console.log("Tentando fazer login...");

    if (isInputsValidation("login", user)) {
      console.log("Validação de entrada bem-sucedida.");
      try {
        await Login(user.email, user.password);
        console.log("Login bem-sucedido");

        navigation.navigate("Main");
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        console.log("Dados inválidos");
      }
    } else {
      console.log("Dados inválidos");
    }
  }

  function goToSingUp() {
    navigation.navigate("SignUp");
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
        <View style={style.container}>
          <Text>OR</Text>
        </View>
        <InsertButton buttonTitle="CREATE NEW ACCOUNT" onPress={goToSingUp} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
