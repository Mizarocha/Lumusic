import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    position: "absolute",
    backgroundColor: "#a0a0a0",
    borderRadius: 15,
    paddingVertical: 8,
    width: "50%",
    alignSelf: "center",
    bottom: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "#FFDE59",
    fontWeight: "bold",
  },
});
export default Button;
