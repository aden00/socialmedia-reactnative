import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfilePicture from "../ProfilePicture";
import { StoryType, UserType } from "../../types";
import moment from "moment";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export type StoryHeaderProps = {
  user: UserType;

  story: StoryType;
};
const StoryHeader = (props: StoryHeaderProps) => {
  const navigation = useNavigation();
  const onCrossPress = () => {
    navigation.goBack();
  };
  const { user, story } = props;
  // console.log(user);
  // console.log(story);
  return (
    <View style={styles.userHeaderContainer}>
      <ProfilePicture image={user.image} size={55} />
      <View style={styles.userNames}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.time}>{moment(story.createdAt).fromNow()}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.1}
        style={{ position: "absolute", right: 20 }}
        onPress={onCrossPress}
      >
        <Entypo name="cross" size={30} color="white" />
      </TouchableOpacity>
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
