import { View } from "react-native";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";

export const AuthContent = () => {
  return (
    <View>
      <EmailInput />
      <PassInput />
    </View>
  );
};
