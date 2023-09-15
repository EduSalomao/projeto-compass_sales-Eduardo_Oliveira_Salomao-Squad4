import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { ForgetContent } from "../auth/forgetContent";
import { RecoveryPassword } from "../utils/auth";
import { isInputsValidation } from "../validations/inputsValidations";
import { DataContext } from "../contexts/auth";

export const ForgotPassScreen = () => {
  const { user } = useContext(DataContext);

  async function recoveryHandler() {
    console.log(user.email);
    if (isInputsValidation("recovery", user)) {
      await RecoveryPassword(user.email);
    } else {
      console.log("dados invalidos");
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
