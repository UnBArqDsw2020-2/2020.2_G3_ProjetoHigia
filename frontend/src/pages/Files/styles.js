import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
  },

  content: {
    width: '100%',
  },

  icon: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 10,
  },

  line: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#86172D',
    marginVertical: 10,
  },

  foldersContainer: {
    width: '100%',
    alignItems: 'center',
  },

  title: {
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
    color: '#86172D',
  },
});

export default styles;
