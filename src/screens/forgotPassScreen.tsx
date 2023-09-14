import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { ForgetContent } from "../auth/forgetContent";

export const ForgotPassScreen = () => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Forgot Password</Text>
      <Text style={[globalstyle.standardText, styles.text]}>
        Please, enter your email address. You will receive a link to create a
        new password via email.
      </Text>
      <ForgetContent />
      <InsertButton buttonTitle="SEND" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 25,
    paddingBottom: 20,
  },
});
