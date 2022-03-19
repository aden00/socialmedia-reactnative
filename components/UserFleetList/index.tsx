import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import usersWithFleets from "../../assets/TwitterAssets/data/usersWithFleets";
import UserFleetPreview from "../UserFleetPreview";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser, listStories } from "../../src/graphql/queries";
import { listUsers } from "./queries";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../ProfilePicture";
import Colors from "../../constants/Colors";
const UserFleetList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const navigation = useNavigation();
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
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }
      try {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (userData) {
          setUser(userData.data.getUser);
          console.log(user);
        }
        // console.log(user);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);
  const renderAddButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("NewStory")}
        style={styles.image}
      >
        <ProfilePicture image={user?.image} size={60} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ height: 100 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={users}
        renderItem={({ item }) => <UserFleetPreview user={item} />}
        ListHeaderComponent={() => renderAddButton()}
      />
    </View>
  );
};

export default UserFleetList;

const styles = StyleSheet.create({
  image: {
    padding: 10,
  },
});
