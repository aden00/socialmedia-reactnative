/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  image?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  name: string,
  email: string,
  image?: string | null,
  tweets?: ModelTweetConnection | null,
  likes?: ModelLikeConnection | null,
  stories?: ModelStoryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items:  Array<Tweet | null >,
  nextToken?: string | null,
};

export type Tweet = {
  __typename: "Tweet",
  id: string,
  content?: string | null,
  userID: string,
  image?: string | null,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
  userTweetsId?: string | null,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  user: User,
  tweet: Tweet,
  createdAt: string,
  updatedAt: string,
  userLikesId?: string | null,
  tweetLikesId?: string | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type Story = {
  __typename: "Story",
  id: string,
  type: string,
  text?: string | null,
  image?: string | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userStoriesId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTweetInput = {
  id?: string | null,
  content?: string | null,
  userID: string,
  image?: string | null,
  userTweetsId?: string | null,
};

export type ModelTweetConditionInput = {
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
  userTweetsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTweetInput = {
  id: string,
  content?: string | null,
  userID?: string | null,
  image?: string | null,
  userTweetsId?: string | null,
};

export type DeleteTweetInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userLikesId?: string | null,
  tweetLikesId?: string | null,
};

export type ModelLikeConditionInput = {
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
  userLikesId?: ModelIDInput | null,
  tweetLikesId?: ModelIDInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userLikesId?: string | null,
  tweetLikesId?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateStoryInput = {
  id?: string | null,
  type: string,
  text?: string | null,
  image?: string | null,
  userStoriesId?: string | null,
};

export type ModelStoryConditionInput = {
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
  userStoriesId?: ModelIDInput | null,
};

export type UpdateStoryInput = {
  id: string,
  type?: string | null,
  text?: string | null,
  image?: string | null,
  userStoriesId?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
  userTweetsId?: ModelIDInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
  userLikesId?: ModelIDInput | null,
  tweetLikesId?: ModelIDInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
  userStoriesId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      tweet:  {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      userLikesId?: string | null,
      tweetLikesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      type: string,
      text?: string | null,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userStoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        content?: string | null,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userTweetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    stories?:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        type: string,
        text?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userStoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    content?: string | null,
    userID: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        createdAt: string,
        updatedAt: string,
        userLikesId?: string | null,
        tweetLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTweetsId?: string | null,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      content?: string | null,
      userID: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTweetsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    userLikesId?: string | null,
    tweetLikesId?: string | null,
  } | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    type: string,
    text?: string | null,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      stories?:  {
        __typename: "ModelStoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userStoriesId?: string | null,
  } | null,
};
