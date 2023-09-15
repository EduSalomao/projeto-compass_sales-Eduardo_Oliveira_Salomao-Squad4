import axios from "axios";

const API_KEY = "AIzaSyDTPoAPg_GsJsYqBgMENaE9l9SMIVMz5xU";

async function Authenticate(mode: any, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

async function SendRecoveryEmail(email: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });

  console.log(response.data);
}

export async function CreateUser(email: string, password: string) {
  await Authenticate("signUp", email, password);
}

export async function Login(email: any, password: any) {
  await Authenticate("signInWithPassword", email, password);
}

export async function RecoveryPassword(email: any) {
  await SendRecoveryEmail(email);
}
