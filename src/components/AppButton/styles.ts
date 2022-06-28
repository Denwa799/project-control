import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  button: {
    color: THEME.WHITE_COLOR,
    borderRadius: SIZES.radius,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 15
  },
  text: {
    color: THEME.WHITE_COLOR,
    textAlign: 'center',
  }
});