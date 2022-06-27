import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "You are never too old to set another goal or to dream a new dream.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarsh",
    firstName: "Adarsh",
    lastName: "Balika",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655919880/360_F_245349044_TMxmWxPpnSzeuauvvQnuFe03ueXgS57m_luvrax.jpg",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Learning Redux",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ManpreetSingh",
    firstName: "Manpreet",
    lastName: "Singh",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655920186/avatar_fytaab.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "Functions are very beautiful in JavaScript",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ManpreetSingh",
    firstName: "Manpreet",
    lastName: "Singh",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655920186/avatar_fytaab.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "Faith is love taking the form of aspiration.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mark",
    firstName: "Mark ",
    lastName: "Zuckerberg",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655919859/800px-LetterZ.svg_aaosvf.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "Technology is best when it brings people together",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ManpreetSingh",
    firstName: "Manpreet",
    lastName: "Singh",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655920186/avatar_fytaab.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "It's not a faith in technology. It's faith in people.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mark",
    firstName: "Mark ",
    lastName: "Zuckerberg",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655919859/800px-LetterZ.svg_aaosvf.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
