import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { HomeScreenProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";

import { EmailInput } from "../components/emailInput";
import { PassInput } from "../components/passInput";
import { NameInput } from "../components/nameInput";

export const SingUpScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Sing Up</Text>
      <View style={globalstyle.inputContainer}>
        <NameInput />
        <EmailInput />
        <PassInput />
      </View>
      <View>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
      <View>
        <View>
          <Button
            title="I forgot my password!"
            onPress={() => navigation.navigate("Forgot")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
