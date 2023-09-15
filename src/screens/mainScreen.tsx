import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../services/firebaseconfig";
import { getDatabase, ref, get } from "firebase/database";

export const MainScreen = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchUsername(userId: any) {
      try {
        const database = getDatabase(app);
        const userRef = ref(database, `usuarios/${userId}/nome_de_usuario`);

        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userUsername = snapshot.val();
          setUsername(userUsername);
        } else {
          console.log("Nome de usuário não encontrado no banco de dados.");
        }
      } catch (error) {
        console.error("Erro ao buscar nome de usuário:", error);
      }
    }

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;

        fetchUsername(userId);
      } else {
        console.log("Usuário não autenticado.");
      }
    });
  }, []);

  return (
    <View>
      <Text>Bem vindo, {username}!</Text>
    </View>
  );
};
