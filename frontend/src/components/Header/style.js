import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#7E162B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    width: '80%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  btnBack: {
    textAlign: 'left',
  },

  btnLogout: {
    textAlign: 'right',
  },
});

export default styles;
