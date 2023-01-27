export interface IUser {
  // 프로필 이미지
  profileImageUrl: string;
  // 유저네임
  userName: string;
  //성별
  gender: "MALE" | "FEMALE";
  // 가입일시
  createdAt: string;
  // 이메일
  email: string;
  // 실명
  name: string;
  // 휴대폰번호
  mobile: string;
  // 주소
  address: string;
}

export type TUser = {
  //프로필이미지
  profileImageUrl: string;
  //유저네임
  userName: string;
  //성별
  gender: "MALE" | "FEMALE";
  //가입일시
  createdAt: string;
  //이메일
  email: string;
  //실명
  name: string;
  //휴대폰번호
  mobile: string;
  //주소
  address: string;
};
