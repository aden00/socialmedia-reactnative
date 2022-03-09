import { Image, MaskedViewIOS, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StoryType, UserType } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
export type StoryViewProps = {
  user: UserType;
  story: StoryType;
};
const StoryView = (props: StoryViewProps) => {
  const { user, story } = props;
  return (
    <View style={styles.container}>
      {!!story.image ? (
        <Image source={{ uri: story.image }} style={styles.image} />
      ) : (
        <Text style={styles.text}>{story.text}</Text>
      )}
    </View>
    // <LinearGradient
    //   colors={["#a1c4fd", "#c2e9fb"]}
    //   style={{
    //     flex: 1,
    //   }}
    // >
    //   <Text>Test</Text>
    // </LinearGradient>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#152d48",

    textAlign: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
