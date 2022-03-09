/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  NewTweet: undefined;
  Story: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Messages: undefined;
  Search: undefined;
  Notifications: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeParamList = {
  HomeScreen: undefined;
};

export type UserType = {
  id: string;
  username: string;
  name: string;
  image: string;
};

export type TweetType = {
  id: string;
  user: UserType;
  createdAt: string;
  content: string;
  image: string;
  numberOfComments: number;
  numberOfRetweets: number;
  numberOfLikes: number;
};

export type StoryType = {
  id: string;
  createdAt: string;
  user: UserType;
  type: string;
  text?: string;
  image?: string;
};
