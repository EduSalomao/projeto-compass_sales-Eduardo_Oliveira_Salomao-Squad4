import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { RegisterContent } from "../auth/resgisterContent";
import { DataContext } from "../contexts/inputsData";
import { CreateUser } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";
import ErrorMessage from "../components/warningMessage";

type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
};

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { user } = useContext(DataContext);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function singUpHandler() {
    if (isInputsValidation("singup", user)) {
      try {
        await CreateUser(user.email, user.password, user.name);
        navigation.navigate("Login");
      } catch (error: any) {
        setErrorMessage(error.message);
        setShowError(true);
      }
    } else {
      setErrorMessage("Invalid data. Fill in all fields correctly.");
      setShowError(true);
    }
  }

  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Sing Up</Text>
      <View style={globalstyle.inputContainer}>
        <RegisterContent />
      </View>
      {showError && (
        <ErrorMessage
          message={errorMessage}
          onClose={() => setShowError(false)}
        />
      )}
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

export default SignUpScreen;
