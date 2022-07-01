import { StyleSheet } from "react-native";
import { SIZES, THEME } from "../../theme";


export const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: SIZES.radius
  },
  textContainer: {
    width: '80%'
  },
  text: {
    fontSize: SIZES.body3,
    color: THEME.WHITE_COLOR_90
  },
  responsible: {
    fontSize: SIZES.body4,
    color: THEME.WHITE_COLOR_90
  },
  red: {
    backgroundColor: THEME.RED_COLOR,
  },
  yellow: {
    backgroundColor: THEME.YELLOW_COLOR
  },
  green: {
    backgroundColor: THEME.GREEN_COLOR
  },
  blackText: {
    color: THEME.BLACK_COLOR
  }
});