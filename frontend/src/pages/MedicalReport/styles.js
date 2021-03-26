import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F7",
  },

  line: {
    width: "90%",
    height: 1,
    alignSelf: "center",
    backgroundColor: "#86172D",
    marginVertical: 10,
  },

  titleContainer: {
    flexDirection: "row",
  },

  title: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    color: "#86172D",
  },
});

export default styles;
