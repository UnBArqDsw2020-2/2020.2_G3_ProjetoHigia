import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: '80%',
    marginTop: '20%',
    
  },

  inputText: {
    width: '100%',
    backgroundColor: '#FFF',
    borderColor: '#7E162B',
    fontSize: 15,
    padding: 7,
    marginBottom: 15,
    borderBottomWidth: 1.0,
  },

  textContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
  },

  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#7E162B',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
