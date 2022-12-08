//this binding 차이
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

//질문 1. 프로퍼티가 많아질수록 App.tsx쪽에 넣어줘야하는 프로퍼티 양이 많아지는데 이부분 개선시키는 방법이 없나요
//이부분은 size? 처럼 저런식으로 넣으면 되는건가요

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
