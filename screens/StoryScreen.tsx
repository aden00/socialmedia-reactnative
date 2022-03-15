import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import usersWithFleets from "../assets/TwitterAssets/data/usersWithFleets";
import StoryView from "../components/StoryView";
import { useRoute } from "@react-navigation/native";
import { StoryType, UserType } from "../types";
const StoryScreen = () => {
  const route = useRoute();
  const userId = route?.params?.userId;
  const [user, setUser] = useState<null | UserType>(
    usersWithFleets.filter((u) => u.id === userId)[0]
  );
  const [storyIndex, setStoryIndex] = useState(0);
  const [story, setStory] = useState<null | StoryType>(
    user?.fleets?.items[storyIndex]
  );

  const goToNextFleet = () => {
    setStoryIndex(storyIndex + 1);
  };

  const goToPrevFleet = () => {
    setStoryIndex(storyIndex - 1);
  };
  useEffect(() => {
    let userIndex = -1;
    for (let i = 0; i < usersWithFleets?.length; i++) {
      if (usersWithFleets[i].id == user.id) {
        userIndex = i;
        break;
      }
    }
    if (storyIndex >= user?.fleets?.items.length) {
      // go to next user

      if (usersWithFleets.length > userIndex + 1) {
        setUser(usersWithFleets[userIndex + 1]);
        setStoryIndex(0);
      } else {
        setStoryIndex(user?.fleets?.items.length - 1);
      }
    } else if (storyIndex < 0) {
      // go to prev user
      if (userIndex > 0) {
        setUser(usersWithFleets[userIndex - 1]);
        setStoryIndex(usersWithFleets[userIndex - 1].fleets.items.length - 1);
      }
    } else if (userIndex >= usersWithFleets.length || userIndex < 0) {
      return;
    } else {
      setStory(user?.fleets?.items[storyIndex]);
    }
  }, [storyIndex]);
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
