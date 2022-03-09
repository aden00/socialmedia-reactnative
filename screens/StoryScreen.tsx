import { StyleSheet, Text, View } from "react-native";
import React from "react";
import usersWithFleets from "../assets/TwitterAssets/data/usersWithFleets";
import StoryView from "../components/StoryView";
const StoryScreen = () => {
  const user = usersWithFleets[0];
  const story = usersWithFleets[0].fleets.items[1];
  return <StoryView user={user} story={story} />;
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
});
