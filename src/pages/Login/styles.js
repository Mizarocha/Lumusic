import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5d5d5",
  },

  containerImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 90,
    position: "absolute",
    resizeMode: "center",
    zIndex: 1,
  },

  image: {
    width: "100%",
    marginTop: "63%",
    padding: "58%",
    resizeMode: "contain",
  },

  containerForm: {
    flex: 1,
    width: "100%",
    marginTop: "65%",
    paddingStart: "5%",
  },

  input: {
    marginBottom: 2,
    marginTop: 12,
    margin: 12,
    width: 30,
    height: 40,
  },

  underline: {
    width: "94%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  wrapperCheckBox: {
    flex: 1,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  checkBox: {
    width: 25,
    height: 22,
    borderWidth: 2,
    margin: 28,
    marginTop: "31%",
    marginRight: 2,
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
    marginLeft: 4,
    marginTop: "24%",
    marginHorizontal: 28,
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },

  labelCheck2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 90,
    marginHorizontal: 28,
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
    marginTop: "15%",
    marginLeft: 30,
  },

  btnRegister: {
    flex: 1,
    backgroundColor: "#FFDE59",
    borderRadius: 8,
    padding: 5,
    marginTop: "18%",
    margin: 10,
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
