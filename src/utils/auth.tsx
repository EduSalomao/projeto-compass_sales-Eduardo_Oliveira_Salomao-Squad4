import axios from "axios";
import { app } from "../services/firebaseconfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { SaveData } from "./asyncStorage";

const API_KEY = "AIzaSyDTPoAPg_GsJsYqBgMENaE9l9SMIVMz5xU";

async function Authenticate(mode: any, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response.data);
    return {
      userId: response.data.localId,
      sessionKey: response.data.idToken,
    };
  } catch (error) {}
}

async function SendRecoveryEmail(email: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });
  const userId = response.data.localId;
  console.log(response.data);
}

export async function CreateUser(
  email: string,
  password: string,
  name: string
) {
  const authResponse = await Authenticate("signUp", email, password);

  if (authResponse) {
    const { userId, sessionKey } = authResponse;

    const userData = {
      user_email: email,
      user_name: name,
      session_key: sessionKey,
    };

    await SaveData("sessionKey", sessionKey);
    await SaveData("userData", userData);

    const db = getDatabase(app);
    const userRef = ref(db, `users/${userId}`);
    await set(userRef, userData);
  }
}

export async function Login(email: any, password: any) {
  const authResponse = await Authenticate(
    "signInWithPassword",
    email,
    password
  );

  if (authResponse) {
    const { userId, sessionKey } = authResponse;
    const db = getDatabase(app);
    const userRef = ref(db, `users/${userId}`);

    try {
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        await SaveData("sessionKey", sessionKey);
        await SaveData("userData", userSnapshot.val());
        console.log("Login bem-sucedido");
      } else {
        console.log("Usuário não encontrado no Realtime Database");
      }
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
    }
  }
}

export async function RecoveryPassword(email: any) {
  await SendRecoveryEmail(email);
}
