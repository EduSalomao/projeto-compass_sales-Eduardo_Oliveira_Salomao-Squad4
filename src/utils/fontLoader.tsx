import React, { ReactNode } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

interface FontLoaderProps {
  children: ReactNode;
}

function FontLoader({ children }: FontLoaderProps) {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/RobotoBold.ttf"),
    "Roboto-Medium": require("../../assets/fonts/RobotoMedium.ttf"),
    "Roboto-Regular": require("../../assets/fonts/RobotoRegular.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return <>{children}</>;
}

export default FontLoader;
