import React from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}

export default Button;
