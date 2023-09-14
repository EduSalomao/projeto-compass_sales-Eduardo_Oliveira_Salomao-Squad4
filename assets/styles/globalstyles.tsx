import { StyleSheet } from "react-native";

export const globalstyle = StyleSheet.create({
  input: {
    height: 64,
    width: "90%",
    paddingLeft: 15,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    borderRadius: 5,
  },
  inputview: {
    alignItems: "center",
    paddingTop: 15,
  },
  inputContainer: {
    padding: 10,
  },
  page: {
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  titlepage: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#222222",
    paddingTop: 30,
    paddingBottom: 60,
    marginLeft: 25,
  },
  statusbar: {
    backgroundColor: "#F9F9F9",
  },
  standardText: {
    fontSize: 14,
    color: "#222222",
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    paddingTop: 0,
    paddingLeft: "10%",
  },
});
