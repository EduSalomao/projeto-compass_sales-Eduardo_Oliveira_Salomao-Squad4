import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/navigation";
import { globalstyle } from "../../../assets/styles/globalstyles";
import { DataContext } from "../../contexts/inputsData";

export const NavigateButton = ({
  navigation,
  text,
  pageDestination,
}: any & {
  text: string;
  pageDestination: keyof RootStackParamList;
}) => {
  const { user, setUser }: any = useContext(DataContext);

  const handleButtonPress = () => {
    navigation.navigate(pageDestination);
    setUser({ ...user, email: "", name: "", password: "" });
  };

  useFocusEffect(
    React.useCallback(() => {
      setUser({ ...user, email: "", name: "", password: "" });
    }, [navigation])
  );

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Image
          source={require("../../../assets/icons/round-arrow_right_alt-24px.png")}
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        <Text style={globalstyle.standardText}>{text}</Text>
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
