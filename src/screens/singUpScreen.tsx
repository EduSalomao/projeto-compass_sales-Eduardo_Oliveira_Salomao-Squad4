import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationProps } from "../routes/navigation";
import { globalstyle } from "../../assets/styles/globalstyles";
import { InsertButton } from "../components/Buttons/insertButton";
import { NavigateButton } from "../components/Buttons/navigateButton";
import { RegisterContent } from "../auth/resgisterContent";
import { DataContext } from "../contexts/auth";
import { CreateUser } from "../utils/auth";
import { app } from "../services/firebaseconfig";
import { isInputsValidation } from "../validations/inputsValidations";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const SingUpScreen = ({ navigation }: NavigationProps) => {
  const { user } = useContext(DataContext);

  async function singUpHandler() {
    if (isInputsValidation("singup", user)) {
      try {
        // Crie o usuário
        await CreateUser(user.email, user.password);

        // Autentique o usuário recém-criado
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, user.email, user.password);

        // Obtenha o ID único do usuário autenticado
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userId = currentUser.uid;

          // Salve os dados do usuário no Realtime Database
          const database = getDatabase(app);
          const userRef = ref(database, `usuarios/${userId}`);
          await set(userRef, {
            nome_de_usuario: user.name,
            // Outros dados do usuário que você deseja salvar
          });

          navigation.navigate("Main");
        } else {
          console.error(
            "ID do usuário não foi obtido após a criação da conta."
          );
        }
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
      }
    } else {
      console.log("Erro de validação");
    }
  }

  return (
    <View style={globalstyle.page}>
      <Text style={globalstyle.titlepage}>Sing Up</Text>
      <View style={globalstyle.inputContainer}>
        <RegisterContent />
      </View>
      <NavigateButton
        navigation={navigation}
        text="Already have an account?"
        pageDestination="Login"
      />
      <View>
        <InsertButton buttonTitle="SING UP" onPress={singUpHandler} />
      </View>
    </View>
  );
};
