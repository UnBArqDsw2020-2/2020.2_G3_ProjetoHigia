import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fieldsView: { 
    display: "flex", 
    flex: 1, 
    justifyContent: "center", 
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "80%",
  },

  btn: {
    paddingVertical: "5%",
    minWidth: 200,
    borderRadius: 8,
    backgroundColor: "#7E162B",
    alignSelf: "center",
    marginBottom: 20,
  },

  btn1: {
    paddingVertical: "5%",
    display: "flex",
    minWidth: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7E162B",
    marginBottom: "10%",
  },

  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFF",
  },

  btnText1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#7E162B",
  }
});

export default styles;
