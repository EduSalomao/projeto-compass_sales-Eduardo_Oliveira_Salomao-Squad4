import React, { useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/auth";
import { isValidName } from "../../validations/inputsValidations";

export function NameInput() {
  const { user, setUser }: any = useContext(DataContext);
  const [isNameValid, setIsNameValid] = useState(true);

  const handleInputName = (value: string) => {
    setUser({ ...user, name: value });
    setIsNameValid(isValidName(value));
  };

  return (
    <View>
      <View style={globalstyle.inputview}>
        <TextInput
          placeholder="Name"
          value={user.name}
          onChangeText={handleInputName}
          style={[globalstyle.input, !isNameValid && globalstyle.invalidInput]}
        />
      </View>
      {!isNameValid && <Text style={globalstyle.errorText}>Invalid name!</Text>}
    </View>
  );
}
