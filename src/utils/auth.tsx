import axios from "axios";

export const API_KEY = "AIzaSyDTPoAPg_GsJsYqBgMENaE9l9SMIVMz5xU";

async function Authenticate(mode: any, email: any, password: any) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key= +
    ${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function CreateUser(email: any, password: any) {
  await Authenticate("singUp", email, password);
}

export async function Login(email: any, password: any) {
  await Authenticate("signInWithPassword", email, password);
}
