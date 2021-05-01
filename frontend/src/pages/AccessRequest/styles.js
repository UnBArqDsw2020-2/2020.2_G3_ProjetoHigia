import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F8F7F7',
    alignItems: 'center',
  },

  messageContainer: {
    width: '90%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '10%',
  },

  message: {
    fontSize: 16,
  },

  content: {
    flex: 1,
    width: '80%',
    marginTop: '10%',
  },

  line: {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#86172D',
    marginVertical: 10,
  },

  infoGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  button: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    // width: '80%',
    borderRadius: 5,
    backgroundColor: '#7E162B',
    alignSelf: 'center',
    // marginVertical: 10,
  },

  buttonText: {
    color: '#FFF',
  },

  textTitle: {
    color: '#7E162B',
  },

  textValue: {
    color: '#39393A',
  },
});

export default styles;
