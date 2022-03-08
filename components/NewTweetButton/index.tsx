import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "../Themed";
import { TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const NewTweetButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewTweet");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Ionicons name="create" size={40} color="white" />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
