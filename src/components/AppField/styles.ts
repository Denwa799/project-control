import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  input: {
    borderRadius: SIZES.radius,
    backgroundColor: THEME.SECOND_WHITE,
    marginTop: 9,
    padding: 6,
    paddingLeft: 9,
    width: "100%"
  },
  dangerInput: {
    borderColor: THEME.DANGER_COLOR,
    borderWidth: 1
  },
  dangerText: {
    color: THEME.DANGER_COLOR,
    fontSize: 12,
    paddingTop: 2
  }
});