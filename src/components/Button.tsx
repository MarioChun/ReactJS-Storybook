//this binding 차이
import { ButtonHTMLAttributes } from "react";
import "./Button.module.scss";

//질문 1. 프로퍼티가 많아질수록 App.tsx쪽에 넣어줘야하는 프로퍼티 양이 많아지는데 이부분 개선시키는 방법이 없나요
type buttonProps = {
  text: string;
  designType: "primary" | "default" | "dashed" | "text" | "link";
  size: "" | "sm" | "md" | "lg";
  disabled: true | false;
  danger: true | false;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<buttonProps> = ({
  text,
  designType,
  size,
  disabled,
}) => {
  return (
    <div>
      {/* 질문 2 프로퍼티 중에 true false 가 여러개 있을때 분기처리 부분을 어떻게 해야하나요? */}
      {disabled ? (
        <button className={`${designType} ${size}`} disabled>
          {text}
        </button>
      ) : (
        <button className={`${designType} ${size}`}>{text}</button>
      )}
    </div>
  );
};

export default Button;
