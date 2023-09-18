import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { DataProvider } from "./src/contexts/inputsData";
import FontLoader from "./src/utils/fontLoader";
import { AppNavigator } from "./src/routes/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <FontLoader>
          <AppNavigator />
        </FontLoader>
      </DataProvider>
      <StatusBar backgroundColor="#F9F9F9" />
    </NavigationContainer>
  );
}
