import React, { FC, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onClose }) => {
  // Usando useEffect para disparar o onClose após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer); // Limpa o timer se o componente for desmontado antes dos 3 segundos
    };
  }, [onClose]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: viewportWidth,
    backgroundColor: "#DB3022",
    padding: 10,
    alignItems: "center",
    opacity: 0.9,
  },
  text: {
    color: "white",
    flex: 1,
  },
  closeButton: {
    marginLeft: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 10,
  },
});

export default ErrorMessage;
