//this binding 차이
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import styles from "./Input.module.scss";

type InputType = InputHTMLAttributes<HTMLInputElement>;

type CustomInput = Omit<InputType, "size">;

interface IInputProps extends CustomInput {
  placeholder: string;
  size?: "sm" | "md" | "lg";
  textArea?: boolean;
  textMaxtLength?: number;
  icon?: boolean;
}

const Container = styled.div``;

const Input = ({
  placeholder,
  size,
  textArea,
  textMaxtLength,
  icon,
}: IInputProps) => {
  return (
    <Container>
      {textArea === true ? (
        <div className={styles.inputContainer}>
          <textarea placeholder={placeholder} />
        </div>
      ) : icon === true ? (
        <div className={styles.search}>
          <input
            className={styles.iconInput}
            type="text"
            placeholder={placeholder}
            maxLength={textMaxtLength}
          />
          <FontAwesomeIcon
            className={styles.iconImg}
            icon={faMagnifyingGlass}
          />
        </div>
      ) : (
        <div className={styles.inputContainer}>
          <input
            placeholder={placeholder}
            maxLength={textMaxtLength}
            className={styles[`${size}`]}
          />
        </div>
      )}
    </Container>
  );
};

export default Input;
