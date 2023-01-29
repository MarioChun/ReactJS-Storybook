export type User = {
  id: number;
  name: string;
  birth: Date;
  gender: "FEMALE" | "MALE";
  profileImageUrl: string;
};

export interface IuserDB {
  _userList: User[];
  select: () => User[];
  selectById: (id: number) => User | undefined;
  create: (param: User) => void;
}

export type UserForm = {
  name?: string;
  birth?: Date;
  gender?: "FEMALE" | "MALE";
  profileImageUrl?: string;
};
