import { useState } from "react";
import styled from "styled-components";
import useModal from "../../hook/useModal";
import ButtonNew from "../button/Button";
import Modal from "../modal/Modal";
import ModalTestPage from "../modal/ModalPage";

const Container = styled.div`
  h5 {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 8px;
    margin-left: 5px;
  }

  div {
    display: flex;
    justify-content: left;
  }
`;

function PackModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const modal1 = useModal();
  const modal2 = useModal();
  return (
    <Container>
      <h5>Modal</h5>
      <ButtonNew
        text="Modal"
        // onClick={() => alert("modal click")}
        onClick={handleOpen}
      ></ButtonNew>

      {isOpen && (
        <Modal onClose={handleClose}>
          <div>모달제목</div>
          <div>모달내용...</div>
        </Modal>
      )}

      <ModalTestPage />

      <ButtonNew text={"모달1 열기"} onClick={modal1.handleOpen} />
      {modal1.isOpen && (
        <Modal onClose={modal1.handleClose}>Modal1 Content</Modal>
      )}

      <ButtonNew text={"모달2 열기"} onClick={modal2.handleOpen} />
      {modal2.isOpen && (
        <Modal onClose={modal2.handleClose}>Modal2 Content</Modal>
      )}
    </Container>
  );
}

export default PackModal;
