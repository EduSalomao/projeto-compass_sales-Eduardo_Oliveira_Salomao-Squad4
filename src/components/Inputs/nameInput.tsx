import React, { useContext, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/inputsData";
import { isValidName } from "../../validations/inputsValidations";

export function NameInput() {
  const { user, setUser }: any = useContext(DataContext);
  const [isNameValid, setIsNameValid] = useState(true);

  // Verifica se o campo de nome não está vazio para mostrar o rótulo
  const showLabel = user.name.trim() !== "";

  const handleInputName = (value: string) => {
    setUser({ ...user, name: value });
    setIsNameValid(isValidName(value));
  };

  const handleBlur = () => {
    setIsNameValid(isValidName(user.name));
  };

  return (
    <View>
      {showLabel && <Text style={globalstyle.label}>Name</Text>}
      <View style={globalstyle.inputview}>
        <TextInput
          placeholder="Name"
          value={user.name}
          onChangeText={handleInputName}
          onBlur={handleBlur}
          style={[
            globalstyle.input,
            !isNameValid && showLabel && globalstyle.invalidInput,
          ]}
        />
      </View>
      {!isNameValid && showLabel && (
        <Text style={globalstyle.errorText}>
          Invalid name! Your name must contain more than 4 characters
        </Text>
      )}
    </View>
  );
}
