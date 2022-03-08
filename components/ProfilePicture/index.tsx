import React from "react";
import { View, Text } from "../Themed";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image?: string | undefined | null;
  size?: number;
};
const ProfilePicture = ({ image, size = 35 }: ProfilePictureProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: size, height: size, borderRadius: 50 }}
    />
  );
};

export default ProfilePicture;
