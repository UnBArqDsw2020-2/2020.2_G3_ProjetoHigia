import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1.0,
    borderColor: '#7E162B',
  },
  // iconContainer: {
  //   marginLeft: 10
  // },
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
