import {
  Image,
  MaskedViewIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { StoryType, UserType } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePicture from "../ProfilePicture";
import StoryHeader from "../StoryHeader";
export type StoryViewProps = {
  user: UserType;
  story: StoryType;
  goToPrevFleet: Function;
  goToNextFleet: Function;
};
const StoryView = (props: StoryViewProps) => {
  const { user, story, goToNextFleet, goToPrevFleet } = props;
  console.log(story);
  // const renderElement = () => {
  //   if (!!story.image) {
  //     return <Image source={{ uri: story.image }} style={styles.image} />;
  //   }
  //   return <Text style={styles.text}>{story.text}</Text>;
  // };
  return (
    <View style={styles.container}>
      {/* {renderElement()} */}
      {story.image && (
        <Image source={{ uri: story.image }} style={styles.image} />
      )}
      <Text style={styles.text}>{story.text}</Text>
      <StoryHeader user={user} story={story} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => goToPrevFleet()}
        ></TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}></TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => goToNextFleet()}
        ></TouchableOpacity>
      </View>
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
  btnContainer: {
    width: "100%",
    height: "70%",
    position: "absolute",
    flexDirection: "row",
  },
});
