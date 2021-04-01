import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
  },

  line: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#86172D',
    marginVertical: 10,
  },

  content: {
    width: '100%',
    backgroundColor: '#F8F7F7',
  },

  title: {
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
    color: '#86172D',
  },

  foldersContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
