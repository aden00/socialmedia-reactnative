import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import tt from "../../assets/TwitterAssets/data/tweets";
import Tweet from "../Tweet";
import { TweetType } from "../../types";
import { View } from "../Themed";
import { API, graphqlOperation } from "aws-amplify";
import { getTweet, getUser, listTweets } from "../../src/graphql/queries";
import { CreateUserInput } from "../../src/API";
import UserFleetList from "../UserFleetList";
const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAllTweets = async () => {
    setLoading(true);
    try {
      const listTweetsData = await API.graphql(graphqlOperation(listTweets));
      const sortedArr = listTweetsData.data.listTweets.items.sort(
        (a: {}, b: {}) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTweets(sortedArr);
      // console.log(listTweetsData);

      setTweets(listTweetsData.data.listTweets.items);
      // console.log(listTweetsData);
      // console.log(tweets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllTweets();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchAllTweets}
        onEndReached={fetchAllTweets}
        onEndReachedThreshold={0.7}
        ListHeaderComponent={UserFleetList}
      />
    </View>
  );
};

export default Feed;
