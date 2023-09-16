import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type SplashScreenProps = {};

export const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/icons/logo-compass-uol.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <Text style={styles.text}>Compass Sales</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
