import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default styles;
