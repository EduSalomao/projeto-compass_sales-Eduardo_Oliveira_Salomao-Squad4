import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";

export function EmailInput() {
  const [email, setEmail] = useState("");

  const handleInputEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  return (
    <View style={globalstyle.inputview}>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={handleInputEmail}
        style={globalstyle.input}
      />
    </View>
  );
}
