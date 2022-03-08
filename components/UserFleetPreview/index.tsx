import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { UserType } from "../../types";
import ProfilePicture from "../ProfilePicture";
import Colors from "../../constants/Colors";

export type UserFleetPreviewProps = {
  user: UserType;
};

const UserFleetPreview = (props: UserFleetPreviewProps) => {
  const {
    user: { username, image },
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ProfilePicture image={image} size={60} />
      </View>
      <Text style={styles.username}>{username}</Text>
    </View>
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
