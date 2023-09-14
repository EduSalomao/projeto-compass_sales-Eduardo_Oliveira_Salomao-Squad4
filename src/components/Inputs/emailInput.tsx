import React, { useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/auth";
import { isValidEmail } from "../../validations/inputsValidations";

export function EmailInput() {
  const { user, setUser }: any = useContext(DataContext);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showLabel, setShowLabel] = useState(false);

  const handleInputChange = (value: string) => {
    setUser({ ...user, email: value });
    setIsEmailValid(isValidEmail(value));

    if (value.trim() !== "") {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  const handleBlur = () => {
    setIsEmailValid(isValidEmail(user.email));
  };

  return (
    <View>
      {showLabel && <Text style={globalstyle.label}>Email</Text>}
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
        <Text style={globalstyle.errorText}>
          Invalid email adress. Should be your@email.com
        </Text>
      )}
    </View>
  );
}
