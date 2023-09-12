import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Forgot: undefined;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export const LoginScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Login</Text>
      <View>
        <Button title="Sing Up" onPress={() => navigation.navigate("SingUp")} />
      </View>
      <View>
        <Button
          title="I forgot my password!"
          onPress={() => navigation.navigate("Forgot")}
        />
      </View>
    </View>
  );
};
