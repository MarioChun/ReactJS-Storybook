import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { User, UserForm } from "./types";
import { UserDB } from "./user-db";

const DummyUser: UserForm = {
  name: "김땡땡",
  birth: "1993-01-20",
  gender: "M",
  profileImageUrl: "https://picsum.photos/200/300",
};

const FormLevel1Page = () => {
  const [list, setList] = useState<User[]>([]);

  const [form, setForm] = useState<UserForm>(DummyUser);

  useEffect(() => {
    setList(UserDB.select());
  }, []);

  console.log(form);
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
                onChange={(event) => {
                  const name = event.target.value;

                  setForm({
                    ...form,
                    name,
                  });
                }}
              />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={"birth"}>생년월일</label>
              <input
                type={"date"}
                id={"birth"}
                className={styles.inputText}
                value={form.birth}
                onChange={(event) => {
                  const birth = event.target.value;
                  console.log(birth);
                  setForm({
                    ...form,
                    birth,
                  });
                }}
              />
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
                  checked={form.gender === "F"}
                  onChange={(event) => {
                    const gender = event.target.value as "F" | "M";
                    setForm({
                      ...form,
                      gender,
                    });
                  }}
                />
                <label htmlFor={"genderM"}>여</label>
                <input
                  type={"radio"}
                  name={"gender"}
                  id={"genderM"}
                  value={"M"}
                  checked={form.gender === "M"}
                  onChange={(event) => {
                    const gender = event.target.value as "F" | "M";
                    setForm({
                      ...form,
                      gender,
                    });
                  }}
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={"profileImage"}>프로필이미지</label>
              <div className={styles.imageWrapper}>
                <img src={form.profileImageUrl} />
                <input
                  type={"file"}
                  id={"profileImage"}
                  onChange={(event) => {
                    const img = event.target.files?.[0];
                    if (!img) return;
                    setForm({
                      ...form,
                      profileImageUrl: URL.createObjectURL(img),
                    });
                  }}
                />
              </div>
            </div>
          </form>
          <button
            type={"submit"}
            className={styles.submitButton}
            onClick={() => {
              UserDB.create({
                name: form.name || "",
                birth: new Date(),
                gender: form.gender === "F" ? "FEMALE" : "MALE",
                profileImageUrl: form.profileImageUrl || "",
              });

              setList([...UserDB.select()]);
            }}
          >
            추가
          </button>
        </div>
        <div className={styles.section}>
          <h3>회원목록</h3>
          <ul className={styles.userList}>
            {list.map((user) => (
              <li className={styles.userItem}>
                <img
                  className={styles.profileImage}
                  src={user.profileImageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormLevel1Page;
