import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: windowWidth * 0.35,
    borderColor: "#7E162B",
    borderWidth: 10,
    justifyContent: "center",
    alignItems:'center',
    marginBottom:'15%',
    marginTop:'5%'
  },
});

export default styles;
