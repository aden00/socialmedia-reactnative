import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: { fontSize: 13, marginHorizontal: 5, color: "grey" },
  moreIcon: { marginLeft: 5 },
  name: { fontWeight: "bold", fontSize: 13 },
  createdAt: { fontSize: 13, marginHorizontal: 2, color: "grey" },
  tweetHeaderNames: {
    flexDirection: "row",
    fontSize: 10,
  },
  content: {
    marginTop: 5,
  },
  image: {
    marginVertical: 10,
    height: 180,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
});

export default styles;
