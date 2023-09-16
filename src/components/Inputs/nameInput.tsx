import React, { useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/inputsData";
import { isValidName } from "../../validations/inputsValidations";

export function NameInput() {
  const { user, setUser }: any = useContext(DataContext);
  const [isNameValid, setIsNameValid] = useState(true);
  const [showLabel, setShowLabel] = useState(false);

  const handleInputName = (value: string) => {
    setUser({ ...user, name: value });
    setIsNameValid(isValidName(value));

    if (value.trim() !== "") {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  return (
    <View>
      {showLabel && <Text style={globalstyle.label}>Name</Text>}
      <View style={globalstyle.inputview}>
        <TextInput
          placeholder="Name"
          value={user.name}
          onChangeText={handleInputName}
          style={[globalstyle.input, !isNameValid && globalstyle.invalidInput]}
        />
      </View>
      {!isNameValid && (
        <Text style={globalstyle.errorText}>
          Invalid name! Your name must contain more than 4 characters
        </Text>
      )}
    </View>
  );
}
