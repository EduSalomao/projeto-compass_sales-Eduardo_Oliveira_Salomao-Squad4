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
    return {
      userId: response.data.localId,
      sessionKey: response.data.idToken,
    };
  } catch (error) {}
}

export async function SendRecoveryEmail(email: any) {
  const emailExists = await isEmailInUse(email);

  if (!emailExists) {
    throw new Error(
      "Este email não está cadastrado. Verifique o email digitado."
    );
  }

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });
  const userId = response.data.localId;
}

async function isEmailInUse(email: string): Promise<boolean> {
  const db = getDatabase(app);
  const usersRef = ref(db, "users");
  const snapshot = await get(usersRef);

  if (snapshot.exists()) {
    const users = snapshot.val();
    for (const userId in users) {
      if (users[userId].user_email === email) {
        return true;
      }
    }
  }

  return false;
}

async function isNameInUse(name: string): Promise<boolean> {
  const db = getDatabase(app);
  const usersRef = ref(db, "users");
  const snapshot = await get(usersRef);

  if (snapshot.exists()) {
    const users = snapshot.val();
    for (const userId in users) {
      if (users[userId].user_name === name) {
        return true;
      }
    }
  }

  return false;
}

export async function CreateUser(
  email: string,
  password: string,
  name: string
) {
  const emailInUse = await isEmailInUse(email);
  const nameInUse = await isNameInUse(name);

  if (emailInUse) {
    throw new Error("This email is already in use. Choose another email.");
  }

  if (nameInUse) {
    throw new Error("This username is already in use. Choose another name.");
  }

  const authResponse = await Authenticate("signUp", email, password);

  if (authResponse) {
    const { userId, sessionKey } = authResponse;

    const userData = {
      user_email: email,
      user_name: name,
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
      }
    } catch (error) {}
  } else {
  }
}

export async function RecoveryPassword(email: any) {
  const emailExists = await isEmailInUse(email);

  if (!emailExists) {
    return false;
  }

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });
  const userId = response.data.localId;

  return true;
}
