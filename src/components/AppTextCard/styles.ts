import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: SIZES.radius
  },
  text: {
    fontSize: SIZES.body3,
    color: THEME.BLACK_COLOR
  },
  responsible: {
    fontSize: SIZES.body4,
  },
  red: {
    backgroundColor: THEME.RED_COLOR,
  },
  yellow: {
    backgroundColor: THEME.YELLOW_COLOR
  },
  green: {
    backgroundColor: THEME.GREEN_COLOR
  }
});