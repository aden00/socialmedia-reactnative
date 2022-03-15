import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import StoryView from "../components/StoryView";
import { useRoute } from "@react-navigation/native";
import { StoryType, UserType } from "../types";
import { API, graphqlOperation } from "aws-amplify";
import { listStories } from "../src/graphql/queries";
import { listUsers } from "../components/UserFleetList/queries";
const StoryScreen = () => {
  const route = useRoute();
  const userId = route?.params?.userId;
  const [user, setUser] = useState<null | UserType>(null);
  const [storyIndex, setStoryIndex] = useState(-1);
  const [story, setStory] = useState<null | StoryType>(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listUsers));
        // console.log(data.data.listUsers.items);
        setStory(user?.stories?.items[storyIndex]);

        setUsers(data.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (!users || users.length == 0) {
      return;
    }
    // console.log(users.find((u) => u.id === userId));

    setUser(users.find((u) => u.id === userId) || null);
    setStoryIndex(0);
    // console.log("hi2");
  }, [users]);

  const goToNextFleet = () => {
    setStoryIndex(storyIndex + 1);
  };

  const goToPrevFleet = () => {
    setStoryIndex(storyIndex - 1);
  };
  useEffect(() => {
    if (!user) {
      return;
    }
    let userIndex = -1;
    for (let i = 0; i < users?.length; i++) {
      if (users[i].id == user.id) {
        userIndex = i;
        break;
      }
    }
    if (storyIndex >= user?.stories?.items.length) {
      // go to next user

      if (users.length > userIndex + 1) {
        setUser(users[userIndex + 1]);
        setStoryIndex(0);
      } else {
        setStoryIndex(user?.stories?.items.length - 1);
      }
    } else if (storyIndex < 0) {
      // go to prev user
      if (userIndex > 0) {
        setUser(users[userIndex - 1]);
        setStoryIndex(users[userIndex - 1].stories.items.length - 1);
      } else if (userIndex <= 0) {
        setStoryIndex(0);
      }
    } else {
      // console.log("hi");
      //set story
      setStory(user?.stories?.items[storyIndex]);
      // console.log(story);
    }
  }, [storyIndex]);

  if (story == null) {
    return <ActivityIndicator />;
  }
  return (
    <StoryView
      user={user}
      story={story}
      goToNextFleet={goToNextFleet}
      goToPrevFleet={goToPrevFleet}
    />
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
});
