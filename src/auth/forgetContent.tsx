import { View } from "react-native";
import { EmailInput } from "../components/Inputs/emailInput";
import { PassInput } from "../components/Inputs/passInput";
import { User } from "../interfaces/interfaces";
import { NameInput } from "../components/Inputs/nameInput";

export const ForgetValidation = (user: User): boolean => {
  const emailIsValid = user.email.includes("@");

  return emailIsValid;
};

export const ForgetContent = () => {
  return (
    <View>
      <EmailInput />
    </View>
  );
};
