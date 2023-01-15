import styles from "./index.module.scss";
import { IUser } from "./types";

const TestUser: IUser = {
  profileImageUrl: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
  userName: "bluebutterfly790",
  gender: "MALE",
  createdAt: "2005-11-07 13:11:12",
  email: "richard.gomez@example.com",
  name: "Richard Gomez",
  mobile: "(612) 961-6959",
  address: "Indiana Grants Pass, United States",
};

const UserListPageNew = () => {
  const userList: IUser[] = [TestUser, TestUser, TestUser, TestUser];
  return (
    <div className={styles.pageContainer}>
      <h1>회원목록</h1>
      <div className={styles.listWrapper}>
        <div className={styles.listContainer}>
          {userList.map((user, index) => (
            <div className={styles.itemContainer} key={index}>
              <img
                className={styles.profileImage}
                src={user.profileImageUrl}
                alt="profile"
              />
              <div className={styles.userDetailContainer}>
                <div>
                  <div className={styles.subTitle}>가입정보</div>
                  <div>
                    유저네임{" "}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListPageNew;
