import AsyncStorage from "@react-native-async-storage/async-storage";

export const SaveData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar dados no AsyncStorage:", error);
  }
};

export const GetData = async (key: any) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao obter dados do AsyncStorage:", error);
    return null;
  }
};

export const RemoveData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover dados do AsyncStorage:", error);
  }
};

export const ClearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar o AsyncStorage:", error);
  }
};

export async function GetUserData(fieldName: string) {
  const userData = await GetData("userData");

  if (userData && userData[fieldName]) {
    return userData[fieldName];
  } else {
    console.log(
      `${fieldName} não encontrado nos dados do usuário no AsyncStorage`
    );
    return null;
  }
}
