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
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, [[navigation]]);

  const checkAuthentication = async () => {
    console.log("Verificando autenticação...");

    const authenticated = await isAuthenticated();

    console.log("Autenticado:", authenticated);

    if (!authenticated) {
      console.log(
        "Usuário não autenticado. Redirecionando para a tela de login."
      );
      navigation.navigate("Login");
      return;
    }

    const name = await GetUserData("user_name");
    console.log("Nome de usuário recuperado do AsyncStorage:", name);
    if (name) {
      setUserName(name);
    } else {
      console.log("Nome de usuário não encontrado no AsyncStorage");
      setUserName("Nome de usuário não encontrado");
    }
  };

  const handleLogout = async () => {
    console.log("Realizando logout...");
    await logoutUser();
    console.log("Logout concluído.");
    navigation.navigate("Login");
  };

  console.log("Renderizando componente MainScreen. Nome de usuário:", userName);

  return (
    <View style={styles.container}>
      <Text>Welcome, {userName || "Nome de usuário não encontrado"}!</Text>
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
