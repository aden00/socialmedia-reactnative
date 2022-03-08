import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import usersWithFleets from "../../assets/TwitterAssets/data/usersWithFleets";
import UserFleetPreview from "../UserFleetPreview";
const UserFleetList = () => {
  return (
    <View style={{ height: 100 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={usersWithFleets}
        renderItem={({ item }) => <UserFleetPreview user={item} />}
      />
    </View>
  );
};

export default UserFleetList;

const styles = StyleSheet.create({});
