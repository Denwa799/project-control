import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.WHITE_COLOR,
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: SIZES.radius,
  },
  text: {
    fontSize: SIZES.body2,
    color: THEME.SECOND_COLOR
  }
});