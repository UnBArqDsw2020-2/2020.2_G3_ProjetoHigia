import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',

    backgroundColor: '#FCFCFC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowRadius: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#86172D',
    shadowOpacity: 0.25,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20
  },

  description: {
    alignSelf: 'center',
    paddingVertical: 5,
  },
});

export default styles;
