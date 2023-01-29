import { useState } from "react";
import useModal from "../../hook/useModal";
import Input from "../input/Input";
import styles from "./ModalTestPage.module.scss";
import ButtonNew from "../button/Button";

const ModalAdressPage = () => {
  const confirmModal = useModal();
  const postCodeModal = useModal();
  const [postCode, setPostCode] = useState("");
  const [address1, setAddress1] = useState("");
  return (
    <div className={styles.postCodeModalContainer}>
      <div className={styles.postCodeContainer}>
        <Input value={postCode} readOnly={true} />
        <ButtonNew text={"주소찾기"} onClick={postCodeModal.handleOpen} />
      </div>
      <div>
        <Input value={address1} readOnly={true} />
      </div>
      {/* <PostCodeModal
        useModalProps={postCodeModal}
        onComplete={({ postCode, address }) => {
          setPostCode(postCode);
          setAddress1(address);
        }}
      />
      <div>
        <Input />
      </div>
      <div className={styles.submitButtonContainer}>
        <ButtonNew
          text={"저장"}
          designType={"primary"}
          onClick={confirmModal.handleOpen}
        />
        <ConfirmModal useModalProps={confirmModal} />
      </div> */}
    </div>
  );
};

export default ModalAdressPage;
