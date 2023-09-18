import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

interface DecodedToken {
  sub: string;
  exp: number;
}

export async function isAuthenticated() {
  try {
    const authToken = await AsyncStorage.getItem("sessionKey");

    if (!authToken) {
      return false;
    }

    const decodedToken = jwtDecode(authToken) as DecodedToken;
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export async function logoutUser() {
  try {
    await AsyncStorage.removeItem("sessionKey");
  } catch (error) {}
}
