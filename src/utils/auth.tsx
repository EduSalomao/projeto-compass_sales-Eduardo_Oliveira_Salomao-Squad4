import axios from "axios";

export const API_KEY = "AIzaSyAkWbhGEKN1s1qiIy8eoEEE2OeW4UxaTV8";

export async function CreateUser(email: any, password: any) {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
