import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    height : 20,
    width :20,
    borderRadius: 10,
    borderColor: THEME.BLACK_COLOR,
    borderWidth: 1,
    marginRight: 5
  },
  text: {
    color: THEME.BLACK_COLOR,
    fontSize: SIZES.body3
  },
  active: {
    backgroundColor: THEME.MAIN_COLOR,
    borderColor: THEME.MAIN_COLOR,
  },
  activeText: {
    color: THEME.MAIN_COLOR,
  }
});