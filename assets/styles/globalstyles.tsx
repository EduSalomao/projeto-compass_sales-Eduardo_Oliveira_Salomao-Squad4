import { StyleSheet } from "react-native";

export const globalstyle = StyleSheet.create({
  input: {
    height: 64,
    width: "90%",
    paddingLeft: 15,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    borderRadius: 5,
    fontFamily: "Roboto-Medium",
  },
  inputview: {
    alignItems: "center",
    paddingTop: 20,
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
    fontFamily: "Roboto-Bold",
  },
  statusbar: {
    backgroundColor: "#F9F9F9",
  },
  standardText: {
    fontSize: 14,
    color: "#222222",
    fontFamily: "Roboto-Medium",
  },
  invalidInput: {
    borderColor: "red",
    borderWidth: 1,
    fontFamily: "Roboto-Regular",
  },
  errorText: {
    color: "#F01F0E",
    paddingTop: 0,
    paddingLeft: "10%",
    bottom: -15,
    position: "absolute",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
  label: {
    position: "absolute",
    color: "#9B9B9B",
    bottom: "52%",
    left: "8%",
    zIndex: 2,
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
});
