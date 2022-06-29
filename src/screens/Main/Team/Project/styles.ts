import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";


export const styles = StyleSheet.create({
  loader: {
    height: '100%',
    justifyContent: 'center'
  },
  list: {
    height: '90%'
  },
  container: {
    paddingBottom: 24
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    paddingLeft: 20,
    paddingRight: 20,

    backgroundColor: THEME.WHITE_COLOR,
    width: '80%',
    height: '50%',
  },
  modalBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});