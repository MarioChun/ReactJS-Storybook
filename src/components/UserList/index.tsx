import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { ApiUser, User } from "./types";

const DummyUser: User = {
  profileImageUrl: "mario",
  username: "Mario",
  gender: "MALE",
  createdAt: "20220112",
  email: "marioverall.chun@gmail.com",
  name: "Hosung",
  mobile: "010-2770-7543",
  address: "Seoul",
};

const UserListPage = () => {
  console.log("22");
  const [UserList, setUserList] = useState<User[]>([]);
  //const UserList: User[] = [DummyUser, DummyUser, DummyUser, DummyUser];

  useEffect(() => {
    fetch("https://randomuser.me/api?results=10&seed=1000&nat=us")
      .then((response) => response.json())
      .then((response) => {
        console.log("1");
        const UserList: User[] = response.results.map((_user: ApiUser) => {
          return mapToUser(_user);
        });
        console.log(UserList);
        setUserList(UserList);
      });
  }, []);
  return (
    <div className={styles.pageContainer}>
      <h1>회원목록</h1>
      <div className={styles.listWrapper}>
        <ul className={styles.listContainer}>
          {UserList?.map((user, index) => (
            <li className={styles.itemContainer} key={index}>
              <img className={styles.profileImage} src={user.profileImageUrl} />
              <div className={styles.userDetailContainer}>
                <div>
                  <div className={styles.subTitle}>가입정보</div>
                  <div>
                    {user.username}{" "}
                    <label className={styles.gender}>{user.gender}</label>
                  </div>
                  <div>{user.createdAt}</div>
                  <div>{user.email}</div>
                </div>
                <hr className={styles.line} />
                <div>
                  <div className={styles.subTitle}>개인정보</div>
                  <div>{user.name}</div>
                  <div>{user.mobile}</div>
                  <div>{user.address}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapToUser: (_user: ApiUser) => User = function (_user) {
  return {
    profileImageUrl: _user.picture.large,
    username: _user.login.username,
    // gender: _user.gender.toUpperCase(),
    gender: _user.gender === "male" ? "MALE" : "FEMALE",
    createdAt: _user.registered.date,
    email: _user.email,
    name: `${_user.name.last} ${_user.name.first}`,
    mobile: _user.cell,
    address: `${_user.location.city} ${_user.location.state} ${_user.location.country}`,
  };
};

export default UserListPage;
