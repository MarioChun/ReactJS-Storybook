export type User = {
  profileImageUrl: string;
  username: string;
  gender: "MALE" | "FEMALE";
  createdAt: string;
  email: string;
  name: string;
  mobile: string;
  address: string;
};

export type ApiUser = {
  gender: "male" | "female"; //성별
  name: {
    //실명
    title: string;
    first: string;
    last: string;
  };
  location: {
    //주소
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string; //이메일
  login: {
    uuid: string;
    username: string; //유저네임
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string; //가입일시
    age: number;
  };
  phone: string;
  cell: string; //휴대폰번호
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string; //프로필이미지
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
