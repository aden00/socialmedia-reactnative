import React from "react";
import { Text, View } from "../../Themed";
import { TweetType } from "../../../types";
import { Image } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import Footer from "./Footer";
import moment from "moment";
import { S3Image } from "aws-amplify-react-native";
export type MainContainerProps = { tweet: TweetType };

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.createdAt}>
            {moment(tweet.createdAt).fromNow()}
          </Text>
        </View>

        <AntDesign name="down" style={styles.moreIcon} size={16} color="grey" />
      </View>
      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image.startsWith("http") ? (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        ) : (
          <S3Image style={styles.image} imgKey={tweet.image} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default MainContainer;
