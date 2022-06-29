import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "AdarshBalika",
    password: "adarshBalika123",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655919880/360_F_245349044_TMxmWxPpnSzeuauvvQnuFe03ueXgS57m_luvrax.jpg",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Manpreet",
    lastName: "Singh",
    username: "ManpreetSingh",
    password: "Test@123456",
    avatar:
      "https://res.cloudinary.com/dffedqurw/image/upload/v1655920186/avatar_fytaab.jpg",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
