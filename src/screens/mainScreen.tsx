import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/navigation";
import { isAuthenticated, logoutUser } from "../utils/authServices";
import { GetUserData } from "../utils/asyncStorage";

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Main">;
};

export const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    checkAuthentication();
  }, [[navigation]]);

  const checkAuthentication = async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      navigation.navigate("Login");
      return;
    }

    const name = await GetUserData("user_name");
    if (name) {
      setUserName(name);
    } else {
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, {userName || "Undefined"}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
