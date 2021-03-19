import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fieldsView: { display: "flex", flex: 1, justifyContent: "space-around" },
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

  button__Home: {
    padding: 12,
    backgroundColor: "#7E162B",
    alignSelf: "center",
    marginBottom: 20,
  },

  homeText: {
    marginBottom: 15,
    color: "#7E162B",
  },

  login__msg: {
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 10,
    marginBottom: 15,
  },

  login__form: {
    width: "80%",
  },

  login__Text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#7E162B",
    textAlign: "center",
    marginBottom: 20,
  },

  login__input: {
    backgroundColor: "#FFF",
    borderColor: "#7E162B",
    fontSize: 15,
    padding: 7,
    marginBottom: 15,
    borderBottomWidth: 1.0,
  },

  login__button: {
    paddingVertical: "5%",
    minWidth: 200,
    borderRadius: 8,
    backgroundColor: "#7E162B",
    alignSelf: "center",
    marginBottom: 20,
  },

  login__button1: {
    paddingVertical: "5%",
    display: "flex",
    minWidth: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7E162B",
    marginBottom: "10%",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFF",
  },

  buttonText1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#7E162B",
  }
});

export default styles;
