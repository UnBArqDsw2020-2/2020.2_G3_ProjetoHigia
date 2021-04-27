import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 15,
    borderRadius: 6,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#86172D',
    shadowOpacity: 0.3,
    borderBottomWidth: 1.0,
    borderColor: '#7E162B',
  },

  dropdownButtonContainer: {
    width: '70%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#FFF',
    padding: 7,
  },

  dropdownButtonText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
    backgroundColor: '#FFF',
    borderColor: '#7E162B',
    padding: 7,
    marginBottom: 15,
    borderBottomWidth: 1.0,
  },
});

export default styles;
