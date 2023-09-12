import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen } from "./src/screens/loginScreen";
import { SingUpScreen } from "./src/screens/singUpScreen";
import { ForgotPassScreen } from "./src/screens/forgotPassScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingUp" component={SingUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
