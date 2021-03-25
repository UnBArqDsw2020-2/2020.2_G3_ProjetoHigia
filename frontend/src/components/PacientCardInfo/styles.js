import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',

    backgroundColor: '#FCFCFC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#86172D',
    shadowOpacity: 0.3,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  description: {
    alignSelf: 'center',
    paddingVertical: 5,
    color: '#39393A',
  },
});

export default styles;
