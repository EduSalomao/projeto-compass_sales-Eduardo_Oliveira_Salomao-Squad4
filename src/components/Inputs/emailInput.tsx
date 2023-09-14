import React, { useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/auth";
import { isValidEmail } from "../../validations/inputsValidations";
import { useFocusEffect } from "@react-navigation/native";

export function EmailInput() {
  const { user, setUser }: any = useContext(DataContext);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputChange = (value: string) => {
    setUser({ ...user, email: value });
    setIsEmailValid(isValidEmail(value));
  };

  const handleBlur = () => {
    setIsEmailValid(isValidEmail(user.email));
  };

  return (
    <View>
      <View style={globalstyle.inputview}>
        <TextInput
          placeholder="Email"
          value={user.email}
          onChangeText={handleInputChange}
          onBlur={handleBlur}
          style={[globalstyle.input, !isEmailValid && globalstyle.invalidInput]}
          keyboardType="email-address"
        />
      </View>
      {!isEmailValid && (
        <Text style={globalstyle.errorText}>Invalid email!</Text>
      )}
    </View>
  );
}
