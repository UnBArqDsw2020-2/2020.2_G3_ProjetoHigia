import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    container3: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },

    button__Home: {
      padding:12,
      backgroundColor: "#7E162B",
      alignSelf: "center",
      marginBottom: 20    
    },

    homeText: {
      marginBottom: 15,
      color: "#7E162B"
    },

    login__msg:{
      fontWeight: "bold",
      fontSize: 22,
      color: "red",
      marginTop:10,
      marginBottom:15
    },

    login__form:{
      width:"80%"
    },

    login__Text:{
      fontSize:40,
      fontWeight: "bold",
      color: "#7E162B",
      textAlign: "center",
      marginBottom: 20
    }, 

    login__input:{
      backgroundColor:"#FFF",
      borderColor: "#7E162B",
      fontSize: 15,
      padding: 7,
      marginBottom: 15,
      borderBottomWidth : 1.0
    },

    login__button: {
      paddingVertical: 10,
      paddingHorizontal: 90,
      borderRadius: 8,
      backgroundColor: "#7E162B",
      alignSelf: "center",
      marginBottom: 20
    },

    buttonText: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#FFF"
    },

    buttonText1: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#000",
    },

    cadastroText:{
      marginBottom: 30,
      alignSelf:'center',
      fontWeight:"bold",
      fontSize: 30
    },

    cadastroText1:{
      marginBottom: 20,
      alignSelf:'center',
      color: "#7E162B",
      fontSize: 15
    },

    cadastroButton:{
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: "#7E162B",
      alignSelf: "center",
      marginTop: 20,
      marginHorizontal: 20
    },

});

export {css};