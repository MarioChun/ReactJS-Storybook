//this binding 차이
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  designType: "primary" | "default" | "dashed" | "text" | "link";
  size?: "sm" | "md" | "lg";
  disabled: boolean;
  danger: boolean;
}

const Button = ({ text, designType, size, disabled }: IButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      {/* 질문 2 프로퍼티 중에 true false 가 여러개 있을때 분기처리 부분을 어떻게 해야하나요? */}
      {disabled ? (
        <button
          className={[styles[`${designType}`], styles[`${size}`]].join(" ")} //[styles[designType], styles[size]].join(" ")
          disabled
        >
          {text}
        </button>
      ) : (
        <button
          className={[styles[`${designType}`], styles[`${size}`]].join(" ")}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
