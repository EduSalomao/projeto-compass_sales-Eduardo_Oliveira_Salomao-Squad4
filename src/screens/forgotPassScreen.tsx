import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { ForgetContent } from "../auth/forgetContent";
import { RecoveryPassword } from "../utils/auth";
import { DataContext } from "../contexts/inputsData";
import ErrorMessage from "../components/warningMessage";

export const ForgotPasswordScreen = () => {
  const { user } = useContext(DataContext);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function recoveryHandler() {
    const emailExists = await RecoveryPassword(user.email);

    if (emailExists) {
      await RecoveryPassword(user.email);
    } else {
      setErrorMessage("Email not registered. Check the email entered.");
      setShowError(true);
    }
  }

  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Forgot Password</Text>
      <Text style={[globalstyle.standardText, styles.text]}>
        Please, enter your email address. You will receive a link to create a
        new password via email.
      </Text>
      <ForgetContent />
      {showError && (
        <ErrorMessage
          message={errorMessage}
          onClose={() => setShowError(false)}
        />
      )}
      <View style={styles.separator}></View>
      <InsertButton buttonTitle="SEND" onPress={recoveryHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 25,
    paddingBottom: 20,
  },
  separator: {
    paddingTop: 50,
  },
});
