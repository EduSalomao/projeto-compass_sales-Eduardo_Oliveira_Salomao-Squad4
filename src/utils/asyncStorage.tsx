import AsyncStorage from "@react-native-async-storage/async-storage";

export const SaveData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

export const GetData = async (key: any) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

export const RemoveData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export const ClearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export async function GetUserData(fieldName: string) {
  const userData = await GetData("userData");

  if (userData && userData[fieldName]) {
    return userData[fieldName];
  } else {
    return null;
  }
}
