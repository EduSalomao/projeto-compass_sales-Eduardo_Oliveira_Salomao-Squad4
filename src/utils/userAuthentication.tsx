import { User } from "../interfaces/user";
import { app } from "../services/firebaseconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { NavigationProps } from "../routes/navigation";
import { SaveData } from "./asyncStorage";

export async function UserAuthenticate(
  user: User,
  { navigation }: NavigationProps
) {
  const auth = getAuth(app);

  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);

    const currentUser = auth.currentUser;
    if (currentUser) {
      const userId = currentUser.uid;

      const database = getDatabase(app);
      const userRef = ref(database, `users/${userId}`);

      await set(userRef, {
        user_email: user.email,
        user_name: user.name,
        user_password: user.password,
      });

      const userData = {
        accessToken: currentUser.getIdToken(),
        userId: userId,
        userName: user.name,
        userEmail: user.email,
        userPassword: user.password,
      };

      await SaveData("", userData);

      navigation.navigate("Main");
    } else {
      console.error("ID do usuário não foi obtido após a criação da conta.");
    }
  } catch (error) {
    console.error("Erro ao autenticar o usuário:", error);
  }
}
