import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

export const InsertButton = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>{props.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DB3022",
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    elevation: 8,
  },
  buttontext: {
    color: "#FFFFFF",
  },
});
