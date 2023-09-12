import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { EmailInput } from "./src/components/emailInput";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Sing Up</Text>
      </View>
      <View>
        <EmailInput />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
