import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { globalstyle } from "../../assets/styles/globalstyles";

export function PassInput() {
  const [password, setPassword] = useState("");

  const handleInputPassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <View style={globalstyle.inputview}>
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={handleInputPassword}
        secureTextEntry
        style={globalstyle.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passInput: {},
});
