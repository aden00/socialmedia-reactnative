import React from "react";
import { TweetType } from "../../types";
import { View } from "../Themed";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import styles from "./style";
export type TweetProps = { tweet: TweetType };

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;
