import AsyncStorage from "@react-native-async-storage/async-storage";

export async function isAuthenticated() {
  try {
    const authToken = await AsyncStorage.getItem("sessionKey");
    return !!authToken;
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    return false;
  }
}

export async function logoutUser() {
  try {
    await AsyncStorage.removeItem("sessionKey");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
}
