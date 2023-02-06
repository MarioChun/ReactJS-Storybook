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
  const [userList, setUserList] = useState<User[]>([]);
  const [form, setForm] = useState<UserForm>(DefaultUser);

  const [user, setUser] = useState<User>();
  const { isOpen, handleOpen, handleClose } = useModal();

  useEffect(() => {
    //localStorage.removeItem("userList");

    // output 이 null 일때 UserDB에서 가져옴
    //const userList = UserDB.select();
    //localStorage.setItem("userList", JSON.stringify(userList));

    const output = localStorage.getItem("userList");
    if (!output) {
      throw new Error("No saved todos");
    }
    const arr_result = JSON.parse(output);

    setUserList(arr_result);
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

    localStorage.removeItem("userList");
    // localStorage.setItem("userList", JSON.stringify([...UserDB.select().then(()=>{})]));

    const output = localStorage.getItem("userList");
    if (!output) {
      throw new Error("No saved todos");
    }
    const arr_result = JSON.parse(output);
    console.log(arr_result);
    //setUserList([...UserDB.select()]);
    setUserList(arr_result);
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
              <li
                className={styles.userItem}
                key={index}
                onClick={() => {
                  // state에 데이터를 갱신하고, 모달을 엽니다!
                  setUser(user);
                  handleOpen();
                }}
              >
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
            <img src={user?.profileImageUrl} className={styles.profileImage} />
            <div>
              <div>아이디: {user?.id}</div>
              <div>이름: {user?.name}</div>
              <div>생년월일: {dayjs(user?.birth).format("YYYY/MM/DD")}</div>
              <div>성별: {user?.gender === "FEMALE" ? "남" : "여"}</div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FormLevelPage;
