import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5d5d5",
  },

  containerPhoto: {
    flex: 1,
    width: "100%",
    padding: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 1,
    width: "100%",
    marginBottom: "15%",
    marginTop: "8%",
    paddingStart: "5%",
  },

  input: {
    borderBottomWidth: 1,
    marginBottom: 2,
    marginTop: 12,
    margin: 12,
    width: 30,
    height: 40,
  },
  wrapperCheckBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 25,
    height: 22,
    borderWidth: 2,
    margin: 28,
    marginBottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  checkBox2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  labelCheck: {
    color: "black",
    fontWeight: "bold",

    fontSize: 17,
    marginLeft: 6,
    marginHorizontal: 28,
    textAlign: "left",
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },
  labelCheck2: {
    color: "black",
    fontWeight: "bold",

    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },
  buttonRegister: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 30,
  },
  btnRegister: {
    flex: 1,
    backgroundColor: "#FFDE59",
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
    margin: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
