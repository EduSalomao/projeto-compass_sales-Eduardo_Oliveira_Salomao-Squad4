import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { DataContext } from "../../contexts/auth";
import { isValidEmail } from "../../validations/inputsValidations";

export const InsertButton = (props: any) => {
  const { user }: any = useContext(DataContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
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
