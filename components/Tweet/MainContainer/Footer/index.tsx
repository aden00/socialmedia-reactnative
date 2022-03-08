import React, { useEffect, useState } from "react";
import { Text, View } from "../../../Themed";
import { TweetType } from "../../../../types";
import { Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {
  createLike,
  deleteLike,
  updateLike,
} from "../../../../src/graphql/mutations";
import { Tweet } from "../../../../src/API";
export type FooterProps = { tweet: TweetType };

const Footer = ({ tweet }: FooterProps) => {
  const [user, setUser] = useState(null);
  const [myLike, setMyLike] = useState(null);
  const [likesCount, setLikesCount] = useState(tweet.likes.items.length);
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
      // console.log(tweet);
      if (tweet?.likes?.items) {
        const searchedLike = tweet.likes?.items.find(
          (like) => like?.userLikesId === currentUser.attributes.sub
        );
        setMyLike(searchedLike);
      }
      // console.log(myLike);

      // setIsLiked(searchedLike);
    };
    fetchUser();
  }, []);
  const submitLike = async () => {
    const like = {
      userLikesId: user.attributes.sub,
      tweetLikesId: tweet.id,
    };
    try {
      const res = await API.graphql(
        graphqlOperation(createLike, { input: like })
      );
      setMyLike(res.data.createLike);
      setLikesCount(likesCount + 1);
    } catch (e) {
      console.log(e);
    } finally {
      // console.warn("liked");
    }
  };
  const removeLike = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteLike, { input: { id: myLike?.id } })
      );
      setLikesCount(likesCount - 1);
      setMyLike(null);
    } catch (e) {
      console.log(e);
    }
  };
  const onLike = async () => {
    if (!user) {
      return;
    }
    if (!myLike) {
      await submitLike();
    }
    if (myLike) {
      await removeLike();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={20} color="grey" />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="retweet" size={33} color="grey" />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLike} activeOpacity={0.2}>
          <AntDesign
            name={!myLike ? "hearto" : "heart"}
            size={20}
            color={!myLike ? "grey" : "red"}
          />
        </TouchableOpacity>

        <Text style={styles.number}>{likesCount}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="share-google" size={25} color="grey" />
      </View>
    </View>
  );
};

export default Footer;
