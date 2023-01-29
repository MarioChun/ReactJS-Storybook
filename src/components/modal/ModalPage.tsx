//this binding 차이
import { PropsWithChildren, useState } from "react";
import ButtonNew from "../button/Button";
import Modal from "./Modal";

interface IModalProps extends PropsWithChildren {
  onClose: () => void;
}

const ModalTestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ButtonNew text={"모달 모듈"} onClick={handleOpen} />
      {isOpen && <Modal onClose={handleClose}>Modal Content</Modal>}
    </div>
  );
};

export default ModalTestPage;
