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
    if (isInputsValidation("login", user)) {
      try {
        await Login(user.email, user.password);

        navigation.navigate("Main");
      } catch (error) {
        console.error("Erro ao fazer login:", error);
      }
    } else {
      console.log("Dados inválidos");
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
        <View style={style.container}></View>
        <View style={style.navigateView}>
          <NavigateButton
            navigation={navigation}
            text="Don't have account? Register"
            pageDestination="SignUp"
          />
        </View>
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
  navigateView: {
    alignItems: "center",
    paddingLeft: 20,
  },
});
