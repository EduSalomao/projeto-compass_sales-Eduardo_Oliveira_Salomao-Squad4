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
import { DataContext } from "../../contexts/inputsData";
import { isValidPassword } from "../../validations/inputsValidations";

export function PassInput() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser }: any = useContext(DataContext);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showLabel, setShowLabel] = useState(false);

  const handleInputPassword = (value: string) => {
    setUser({ ...user, password: value });
    setIsPasswordValid(isValidPassword(value));
    setShowLabel(value.trim() !== "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBlur = () => {
    setIsPasswordValid(isValidPassword(user.password));
  };

  return (
    <View>
      {showLabel && <Text style={globalstyle.label}>Password</Text>}
      <View style={[globalstyle.inputview]}>
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={handleInputPassword}
          onBlur={handleBlur}
          secureTextEntry={!showPassword}
          style={[
            globalstyle.input,
            !isPasswordValid && showLabel && globalstyle.invalidInput,
          ]}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {!isPasswordValid && showLabel && (
        <Text style={globalstyle.errorText}>
          Invalid password. Your password must contain at least 6 characters
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "63%",
    right: "10%",
  },
});
