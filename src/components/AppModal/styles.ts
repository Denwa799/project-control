import { StyleSheet } from "react-native";
import { THEME, SIZES } from "../../theme";


export const styles = StyleSheet.create({
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 20,
    backgroundColor: THEME.WHITE_COLOR,
    width: '80%',
    borderRadius: SIZES.radius
  }
});