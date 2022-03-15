/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      stories {
        items {
          id
          type
          text
          image
          createdAt
          updatedAt
          userStoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      stories {
        items {
          id
          type
          text
          image
          createdAt
          updatedAt
          userStoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      stories {
        items {
          id
          type
          text
          image
          createdAt
          updatedAt
          userStoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
      id
      content
      userID
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
      id
      content
      userID
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
      id
      content
      userID
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          tweetLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      createdAt
      updatedAt
      userLikesId
      tweetLikesId
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      createdAt
      updatedAt
      userLikesId
      tweetLikesId
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        userID
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      createdAt
      updatedAt
      userLikesId
      tweetLikesId
    }
  }
`;
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
      id
      type
      text
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userStoriesId
    }
  }
`;
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
      id
      type
      text
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userStoriesId
    }
  }
`;
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
      id
      type
      text
      image
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        stories {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userStoriesId
    }
  }
`;
