import { View } from "react-native";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";
import { User } from "../interfaces/interfaces";

export const authValidation = (user: User): boolean => {
  const emailIsValid = user.email.includes("@");
  const passIsValid = user.password.length > 6;

  return emailIsValid && passIsValid;
};

export const AuthContent = () => {
  return (
    <View>
      <EmailInput />
      <PassInput />
    </View>
  );
};
