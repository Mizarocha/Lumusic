import React, { TextInput } from "react-native";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Button from "../../components/Button";
import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.logo}
          source={require("../../../assets/login2.png")}
        />
        <Image
          style={styles.image}
          source={require("../../../assets/photo.png")}
        />
      </View>

      <View style={styles.containerForm}>
        <Image
          style={styles.input}
          source={require("../../../assets/user.png")}
        />

        <View style={styles.underline}></View>
        <Image
          style={styles.input}
          source={require("../../../assets/password-icon.png")}
        />

        <View style={styles.underline}></View>
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
