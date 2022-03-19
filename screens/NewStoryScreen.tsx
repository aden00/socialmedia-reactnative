import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tweets from "../assets/TwitterAssets/data/tweets";

import EditScreenInfo from "../components/EditScreenInfo";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { Text, View } from "../components/Themed";
import Tweet from "../components/Tweet";
import { RootTabScreenProps } from "../types";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../components/ProfilePicture";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import config from "../src/aws-exports";
Storage.configure({
  region: config.ws_project_region,
});
import { createStory, createTweet } from "../src/graphql/mutations";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "../src/graphql/queries";
// import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import awsmobile from "../src/aws-exports";

const NewStoryScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("hi");
  const [user, setUser] = useState({});
  // const getPermissionAsync = async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //     if (status !== "granted") {
  //       alert("Sorry, we need your permissions to make this work");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   getPermissionAsync();
  // }, []);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };
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
  const uploadImage = async () => {
    try {
      const res = await fetch(imageUrl);

      const blob = await res.blob();

      const urlParts = imageUrl.split(".");
      const extension = urlParts[urlParts.length - 1];
      const str = uuidv4();
      const key = `${str}.${extension}`;

      const response = await Storage.put(key, blob);
      console.log(response);
      return key;
    } catch (e) {
      console.log(e);
    }
  };
  const onPostStory = async () => {
    let image;
    if (!!imageUrl) {
      image = await uploadImage();
      console.log(image);
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (userInfo) {
        //Check if user alr exists in db

        const input = {
          type: image ? "IMAGE" : "TEXT",
          text: text,
          image: image,
          userStoriesId: userInfo.attributes.sub,
        };
        await API.graphql(graphqlOperation(createStory, { input: input }));
      }
    } catch (e) {
      console.log(e);
    }
    navigation.navigate("Home");
  };
  const onPressClose = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={onPressClose}>
          <EvilIcons name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.button}
          onPress={onPostStory}
        >
          <Text style={styles.buttontxt}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={user?.image} />
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="what's happening?"
            style={styles.tweetInput}
            numberOfLines={3}
            multiline={true}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImage}>Choose an image</Text>
          </TouchableOpacity>
          {/* <TextInput
            placeholder="image url (optional)"
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={setImageUrl}
          /> */}
          <View style={styles.previewImageContainer}>
            <Image style={styles.chooseImage} source={{ uri: imageUrl }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
  },
  buttontxt: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  newTweetContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    padding: 15,
  },
  inputsContainer: { marginLeft: 10, width: "100%" },
  tweetInput: { height: 100, maxHeight: 300, fontSize: 20 },
  imageInput: { height: 100, maxHeight: 300, fontSize: 20 },
  pickImage: { color: Colors.light.tint, fontSize: 15 },
  chooseImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  previewImageContainer: {
    width: "80%",
    borderColor: "lightgrey",
    borderWidth: 0.5,
    marginVertical: 15,

    // backgroundColor: "red",
  },
});
export default NewStoryScreen;
