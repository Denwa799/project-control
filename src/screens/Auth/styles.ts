import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  auth: {
    height: "100%",
    width: "100%",
    backgroundColor: THEME.WHITE_COLOR,
    paddingTop: 16
  },
  block: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "75%"
  },
  title: {
    textAlign: "center",
    color: THEME.BLACK_COLOR,
    fontWeight: "bold",
    marginBottom: 9,
    fontSize: SIZES.h2
  },
  text: {
    color: THEME.BLACK_COLOR,
    fontWeight: "bold",
    textAlign: "right",
    fontSize: SIZES.body5,
    marginTop: 10
  }
});