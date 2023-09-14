import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { globalstyle } from "../../../assets/styles/globalstyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DataContext } from "../../contexts/auth";
import { isValidPassword } from "../../validations/inputsValidations";

export function PassInput() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser }: any = useContext(DataContext);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleInputPassword = (value: string) => {
    setUser({ ...user, password: value });
    setIsPasswordValid(isValidPassword(value));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={globalstyle.inputview}>
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={handleInputPassword}
          secureTextEntry={!showPassword}
          style={[
            globalstyle.input,
            !isPasswordValid && globalstyle.invalidInput,
          ]}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#222222"
          />
        </TouchableOpacity>
      </View>
      {!isPasswordValid && (
        <Text style={globalstyle.errorText}>Invalid password!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "55%",
    right: "10%",
  },
});
