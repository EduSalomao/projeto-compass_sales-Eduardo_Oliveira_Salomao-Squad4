import React, { useContext } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { RegisterContent } from "../auth/resgisterContent";
import { DataContext } from "../contexts/inputsData";
import { CreateUser } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";

type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
};

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { user } = useContext(DataContext);

  async function singUpHandler() {
    if (isInputsValidation("singup", user)) {
      try {
        await CreateUser(user.email, user.password, user.name);
        navigation.navigate("Main");
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
      }
    } else {
      console.log("Erro de validação");
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
