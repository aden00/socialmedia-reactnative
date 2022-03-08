import React from "react";
import { User } from "../../../src/API";
import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";
import { View } from "../../Themed";

export type LeftContainerProps = {
  user: User;
};

const LeftContainer = ({ user }: LeftContainerProps) => {
  // console.log(user);

  return (
    <View>
      {/* profile pic */}

      <ProfilePicture image={user.image} size={68} />
    </View>
  );
};

export default LeftContainer;
