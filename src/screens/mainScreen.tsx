import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { GetUserData, ClearAllData } from "../utils/asyncStorage";
import { auth } from "../services/firebaseconfig";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/navigation";

type MainScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Main">;
};

export const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;
      console.log("checkAuthentication foi chamado.");
      if (!user) {
        navigation.navigate("Login");
        console.log("Usuário não autenticado, redirecionando para Login.");
      } else {
        fetchUserName();
      }
    };

    const fetchUserName = async () => {
      console.log("Tentando buscar o nome de usuário...");
      const name = await GetUserData("user_name");
      setUserName(name || "Nome de usuário não encontrado");
    };

    checkAuthentication();
  }, [navigation]);

  const handleLogout = async () => {
    await ClearAllData();
    await auth.signOut();
    console.log("Logout realizado. Dados removidos do AsyncStorage.");

    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Welcome, {userName}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
