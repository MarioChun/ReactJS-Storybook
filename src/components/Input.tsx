//this binding 차이
import { InputHTMLAttributes } from "react";
import "./input.scss";

//질문 1. 프로퍼티가 많아질수록 App.tsx쪽에 넣어줘야하는 프로퍼티 양이 많아지는데 이부분 개선시키는 방법이 없나요
type inputProps = {
  placeholder: string;
  size?: "sm" | "md" | "lg";
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<inputProps> = ({ placeholder, size }) => {
  return (
    <div>
      <input placeholder={placeholder} className={`${size}`} />
    </div>
  );
};

export default Input;
