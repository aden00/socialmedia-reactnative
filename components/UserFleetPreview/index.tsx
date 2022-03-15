import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { UserType } from "../../types";
import ProfilePicture from "../ProfilePicture";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export type UserFleetPreviewProps = {
  user: UserType;
};

const UserFleetPreview = (props: UserFleetPreviewProps) => {
  const navigation = useNavigation();

  const {
    user: { username, id, image },
  } = props;
  const onPress = () => {
    console.log(id);

    navigation.navigate("Story", { userId: id });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.image}>
          <ProfilePicture image={image} size={60} />
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserFleetPreview;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    margin: 10,
  },
  image: {
    padding: 2,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: Colors.light.tint,
  },

  username: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
});
