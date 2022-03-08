import { FlatList, StyleSheet } from "react-native";
import tweets from "../assets/TwitterAssets/data/tweets";

import EditScreenInfo from "../components/EditScreenInfo";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { Text, View } from "../components/Themed";
import UserFleetPreview from "../components/UserFleetPreview";
import { RootTabScreenProps } from "../types";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});
export default HomeScreen;
