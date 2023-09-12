import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Forgot: undefined;
};

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};
