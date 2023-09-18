import React, { useContext, useState } from "react";
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
import ErrorMessage from "../components/warningMessage";

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { user }: any = useContext(DataContext);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function loginHandler() {
    if (isInputsValidation("login", user)) {
      try {
        await Login(user.email, user.password);
        navigation.navigate("Main");
      } catch (error) {
        setErrorMessage("Error logging in. Check your data.");
        setShowError(true);
      }
    } else {
      setErrorMessage("Invalid data. Fill in all fields correctly.");
      setShowError(true);
    }
  }

  return (
    <View style={styles.container}>
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

        <View style={styles.navigateView}>
          <NavigateButton
            navigation={navigation}
            text="Don't have an account? Register"
            pageDestination="SignUp"
          />
        </View>
      </View>

      {showError && (
        <ErrorMessage
          message={errorMessage}
          onClose={() => setShowError(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigateView: {
    alignItems: "center",
    paddingLeft: 20,
  },
});
