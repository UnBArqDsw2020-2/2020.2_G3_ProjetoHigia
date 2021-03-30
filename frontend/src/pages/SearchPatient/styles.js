import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#86172D',
    shadowOpacity: 0.25,
    borderRadius: 8,
    paddingLeft: 15,
    width: '80%',
  },

  searchInput: {
    width: '80%',
    height: 60,
    shadowRadius: 20,
    paddingHorizontal: 15,
  },

  patientName: {
    fontSize: 25,
    marginVertical: 30,
  },

  buttonsContainer: {
    marginVertical: 15,
    width: '100%',
  },
});

export default styles;
