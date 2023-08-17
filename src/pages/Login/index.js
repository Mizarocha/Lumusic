import React from "react-native";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Button from "../../components/Button";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image />
      </View>
      <View style={styles.containerPhoto}>
        <Image source={require("../../../assets/photo.png")} />
      </View>
      <View style={styles.containerForm}>
        <Image
          style={styles.input}
          source={require("../../../assets/user.png")}
        />
        <Image
          style={styles.input}
          source={require("../../../assets/password-icon.png")}
        />
      </View>
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerText1}>Lembre me</Text>
        <Text style={styles.registerText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Button />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#d5d5d5",
  },
  icon: {},

  containerPhoto: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 1,
    width: "100%",
    marginBottom: "8%",
    marginTop: "14%",
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  input: {
    borderBottomWidth: 1,
    marginBottom: 2,
    marginTop: 14,
    margin: 20,
    width: 30,
    height: 40,
  },
});
export default Login;
