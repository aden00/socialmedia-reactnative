import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import usersWithFleets from "../../assets/TwitterAssets/data/usersWithFleets";
import UserFleetPreview from "../UserFleetPreview";
import { API, graphqlOperation } from "aws-amplify";
import { listStories } from "../../src/graphql/queries";
import { listUsers } from "./queries";
const UserFleetList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listUsers));
        setUsers(data.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={{ height: 100 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={users}
        renderItem={({ item }) => <UserFleetPreview user={item} />}
      />
    </View>
  );
};

export default UserFleetList;

const styles = StyleSheet.create({});
