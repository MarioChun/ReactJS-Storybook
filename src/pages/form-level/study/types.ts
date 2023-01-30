// 회원 하나 하나의 타입들
export type User = {
  id: number;
  name: string;
  birth: Date;
  gender: "FEMALE" | "MALE";
  profileImageUrl: string;
};

// user-db 의 인터페이스들
/*
  1. _userList : User[]
  2. select : () => User[]
  3. selectBtId : () => User | undefined
  4. create : (user : USerCreate 라는걸 만듬 - id 제외 ) => void
*/
export interface IUserDB {
  _userList: User[];
  select: () => User[];
  selectById: (id: number) => User | undefined;
  create: (user: UserCreate) => void;
}

export type UserForm = {
  name?: string;
  birth?: string;
  gender?: "FEMALE" | "MALE";
  profileImageUrl?: string;
};

// createUser를 만들때 사용하는 타입
export type UserCreate = {
  name: string;
  birth: Date;
  gender: "FEMALE" | "MALE";
  profileImageUrl: string;
};
