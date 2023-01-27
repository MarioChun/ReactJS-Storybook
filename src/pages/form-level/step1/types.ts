export type User = {
  id: number;
  name: string;
  birth: Date;
  gender: "FEMALE" | "MALE";
  profileImageUrl: string;
};

export interface IUserDB {
  _userList: User[];
  select: () => User[];
  selectById: (id: number) => User | undefined;
  create: (user: UserCreate) => void;
}

export type UserForm = {
  name?: string;
  birth?: string;
  gender?: "F" | "M";
  profileImageUrl?: string;
};

export type UserCreate = {
  name: string;
  birth: Date;
  gender: "FEMALE" | "MALE";
  profileImageUrl: string;
};
