import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { NavigationProps, RootStackParamList } from "../../routes/navigation";

export const NavigateButton = ({
  navigation,
  text,
  pageDestination,
}: NavigationProps & {
  text: string;
  pageDestination: keyof RootStackParamList;
}) => {
  const handleButtonPress = () => {
    navigation.navigate(pageDestination);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Image
          source={require("../../../assets/icons/round-arrow_right_alt-24px.png")}
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 14,
    padding: 15,
    paddingLeft: 40,
    paddingBottom: 20,
    flexDirection: "row-reverse",
  },
});
