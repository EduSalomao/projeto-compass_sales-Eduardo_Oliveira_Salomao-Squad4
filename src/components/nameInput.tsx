import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { globalstyle } from "../../assets/styles/globalstyles";

export function NameInput() {
  const [name, setName] = useState("");

  const handleInputName = (newName: string) => {
    setName(newName);
  };

  return (
    <View style={globalstyle.inputview}>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={handleInputName}
        style={globalstyle.input}
      />
    </View>
  );
}
