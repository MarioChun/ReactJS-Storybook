import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { User, UserCreate, UserForm } from "./types";
import { UserDB } from "./user-db";
import dayjs from "dayjs";
import Modal from "../../../components/modal/Modal";
import useModal from "../../../hook/useModal";

// const DummyUser: UserForm = {
//   name: '김땡땡',
//   birth: '1993-01-20',
//   gender: 'F',
//   profileImageUrl: 'https://picsum.photos/200/300',
// };

const DefaultUser: UserForm = {
  name: "",
  birth: dayjs().format("YYYY-MM-DD"),
  gender: "F",
  profileImageUrl: "",
};

const FormLevelPage = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [userList, setUserList] = useState<User[]>([]);
  const [form, setForm] = useState<UserForm>(DefaultUser);

  useEffect(() => {
    const userList = UserDB.select();
    setUserList(userList);
  }, []);

  const handleChangeName = (name: string) => {
    setForm({
      ...form,
      name,
    });
  };

  const handleChangeBirth = (birth: string) => {
    setForm({
      ...form,
      birth,
    });
  };

  const handleChangeGender = (gender: "F" | "M") => {
    setForm({
      ...form,
      gender,
    });
  };

  const handleChangeImage = (file: File) => {
    setForm({
      ...form,
      profileImageUrl: URL.createObjectURL(file),
    });
  };

  const handleSubmit = () => {
    const user: UserCreate = {
      name: form.name || "",
      birth: dayjs(form.birth).toDate(),
      gender: form.gender === "F" ? "FEMALE" : "MALE",
      profileImageUrl: form.profileImageUrl || "",
    };
    UserDB.create(user);
    setUserList([...UserDB.select()]);
    setForm(DefaultUser);
  };

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
                type={"text"}
                id={"name"}
                className={styles.inputText}
                value={form.name}
                onChange={(event) => handleChangeName(event.target.value)}
              />
            </div>
            <div className={styles.formWrapper}>
              <label htmlFor={"birth"}>생년월일</label>
              <input
                type={"date"}
                id={"birth"}
                className={styles.inputText}
                value={form.birth}
                onChange={(event) => handleChangeBirth(event.target.value)}
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
                  checked={form.gender === "F"}
                  onChange={() => handleChangeGender("F")}
                />
                <label htmlFor={"genderM"}>여</label>
                <input
                  type={"radio"}
                  name={"gender"}
                  id={"genderM"}
                  checked={form.gender === "M"}
                  onChange={() => handleChangeGender("M")}
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
                    if (event.target.files?.[0]) {
                      handleChangeImage(event.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
          </form>
          <button
            type={"submit"}
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            추가
          </button>
        </div>
        <div className={styles.section}>
          <h3>회원목록</h3>
          <ul className={styles.userList}>
            {userList.map((user, index) => (
              <li className={styles.userItem} key={index}>
                <img
                  className={styles.profileImage}
                  src={user.profileImageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={handleClose}>
          <div className={styles.userInfo}>
            <img
              src={"https://randomuser.me/api/portraits/women/14.jpg"}
              className={styles.profileImage}
            />
            <div>
              <div>아이디: 12345</div>
              <div>이름: 김땡땡</div>
              <div>생년월일: 1993/01/20</div>
              <div>성별: 여</div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FormLevelPage;
