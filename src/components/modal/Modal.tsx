//this binding 차이
import { PropsWithChildren, useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./Modal.module.scss";

interface IModalProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal = ({ onClose, children }: IModalProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <IoMdClose onClick={onClose} className={styles.closeButton} />
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
