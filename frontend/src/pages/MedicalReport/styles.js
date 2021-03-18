import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F7',
  },

  infoUser: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  dataUser: {
    width: '50%',
    alignItems: 'center',
  },

  heightWeight: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  line: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#86172D',
    marginVertical: 10,
  },

  title: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#86172D',
  },
});

export default styles;
