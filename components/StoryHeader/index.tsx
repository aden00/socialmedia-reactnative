import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../ProfilePicture";
import { UserType } from "../../types";
export type StoryHeaderProps = {
  user: UserType;
};
const StoryHeader = (props: StoryHeaderProps) => {
  const { user } = props;
  return (
    <View style={styles.userHeaderContainer}>
      <ProfilePicture image={user.image} size={55} />
      <View style={styles.userNames}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.time}>2 days ago</Text>
        </View>
      </View>
    </View>
  );
};

export default StoryHeader;

const styles = StyleSheet.create({
  userHeaderContainer: {
    flexDirection: "row",

    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    position: "absolute",
    top: 30,
    padding: 10,
  },
  userNames: { paddingLeft: 10 },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  username: { color: "white", fontSize: 15 },
  time: { color: "white", fontSize: 15, marginLeft: 15 },
});
