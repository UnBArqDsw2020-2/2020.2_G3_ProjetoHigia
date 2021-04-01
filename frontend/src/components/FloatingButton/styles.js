import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  plusButtonView: {
    bottom: 55,
    right: 25,
    position: 'absolute',
    zIndex: 3,
  },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#86172D',

    alignItems: 'center',
    justifyContent: 'center',
  },
  helpButtonView: {
    bottom: 55,
    right: 25,
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  helpButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonText: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});

export default styles;
