import React from "react";
import { View } from "react-native";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";
import { NameInput } from "../components/Inputs/nameInput";

export const RegisterContent = () => {
  return (
    <View>
      <NameInput />
      <EmailInput />
      <PassInput />
    </View>
  );
};
