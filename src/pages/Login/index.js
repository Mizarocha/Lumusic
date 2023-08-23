import React from "react-native";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Button from "../../components/Button";
import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
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
      <View style={styles.wrapperCheckBox}>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
        <Text style={styles.labelCheck}>Lembre me</Text>
        <TouchableOpacity style={styles.checkBox2}>
          <Text style={styles.labelCheck2}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRegister}>
        <Text style={styles.registerText}>Não tem conta?</Text>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <Button />
    </View>
  );
}

export default Login;
