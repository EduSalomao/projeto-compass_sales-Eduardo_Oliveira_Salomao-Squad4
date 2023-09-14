import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Forgot: undefined;
  Main: undefined;
};

export type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, "SingUp">;
};
