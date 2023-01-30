import { useState } from "react";
import styles from "./index.module.scss";
import { UserForm } from "./types";

const DummyData: UserForm = {
  name: "Mario",
  birth: "1993-01-20",
  gender: "MALE",
  profileImageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
};

const FormLevelPageStudy = () => {
  const [form, setForm] = useState<UserForm>(DummyData);
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>회원관리</h1>
      <div className={styles.pageContent}>
        <div className={[styles.section, styles.addForm].join(" ")}>
          <h3>회원등록</h3>
          <form className={styles.userAddForm}>
            <div className={styles.formWrapper}>
              <label htmlFor={"name"}>이름</label>
              <input
                value={form.name}
                type={"text"}
                id={"name"}
                className={styles.inputText}
              />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={"birth"}>생년월일</label>
              <input type={"date"} id={"birth"} className={styles.inputText} />
            </div>
            <div className={styles.formWrapper}>
              <label>성별</label>
              <div className={styles.genderGroup}>
                <label htmlFor={"genderF"}>남</label>
                <input
                  type={"radio"}
                  name={"gender"}
                  id={"genderF"}
                  value={"F"}
                  checked
                />
                <label htmlFor={"genderM"}>여</label>
                <input
                  type={" radio"}
                  name={"gender"}
                  id={"genderM"}
                  value={"M"}
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={"profileImage"}>프로필이미지</label>
              <div className={styles.imageWrapper}>
                <img src={""} />
                <input type={"file"} id={"profileImage"} />
              </div>
            </div>
          </form>
          <button type={"submit"} className={styles.submitButton}>
            추가
          </button>
        </div>
        <div className={styles.section}>
          <h3>회원목록</h3>
          <ul className={styles.userList}>
            <li className={styles.userItem}>
              <img
                className={styles.profileImage}
                src={"https://randomuser.me/api/portraits/men/75.jpg"}
              />
            </li>
            <li className={styles.userItem}>
              <img
                className={styles.profileImage}
                src={"https://randomuser.me/api/portraits/men/10.jpg"}
              />
            </li>
            <li className={styles.userItem}>
              <img
                className={styles.profileImage}
                src={"https://randomuser.me/api/portraits/women/10.jpg"}
              />
            </li>
            <li className={styles.userItem}>
              <img
                className={styles.profileImage}
                src={"https://randomuser.me/api/portraits/women/14.jpg"}
              />
            </li>
            <li className={styles.userItem}>
              <img
                className={styles.profileImage}
                src={"https://randomuser.me/api/portraits/men/18.jpg"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormLevelPageStudy;
