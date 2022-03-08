import { FlatList, StyleSheet } from "react-native";
import tweets from "../assets/TwitterAssets/data/tweets";

import EditScreenInfo from "../components/EditScreenInfo";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { Text, View } from "../components/Themed";
import Tweet from "../components/Tweet";
import UserFleetPreview from "../components/UserFleetPreview";
import { RootTabScreenProps } from "../types";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <UserFleetPreview
        user={{
          id: "1",
          name: "aden",
          username: "aden",
          image:
            "https://static.newmobilelife.com/wp-content/uploads/2018/05/baby-groot-guardians-672x372.jpg",
        }}
      />
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
    paddingTop: 50,
  },
});
export default HomeScreen;
