import userEvent from "@testing-library/user-event";
import { IUserDB, User } from "./types";

export const UserDB: IUserDB = {
  _userList: [
    {
      id: 1,
      name: "김땡땡",
      birth: new Date(),
      gender: "MALE",
      profileImageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 2,
      name: "이땡땡",
      birth: new Date(),
      gender: "MALE",
      profileImageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 3,
      name: "최땡땡",
      birth: new Date(),
      gender: "FEMALE",
      profileImageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ],
  select: function () {
    return this._userList;
  },
  selectById: function (id: number) {
    return this._userList.find((user) => user.id === id);
  },
  create: function (user) {
    const newUser: User = {
      ...user,
      id: new Date().getTime(),
    };
    this._userList.push(newUser);
  },
};
