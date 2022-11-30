//this binding 차이
import { text } from "node:stream/consumers";
import { FC, InputHTMLAttributes } from "react";
import "./Input.module.scss";

type inputType = InputHTMLAttributes<HTMLInputElement>;

type customInput = Omit<inputType, "size">;

interface inputProps extends inputType {
  placeHolder: string;
  //size?: "sm" | "md" | "lg";
  textArea?: true | false;
  textMaxtLength?: number;
}

const Input: FC<inputProps> = ({
  placeHolder,
  //size,
  textArea,
  textMaxtLength,
}) => {
  return (
    <div>
      {textArea === true ? (
        <textarea placeholder={placeHolder} />
      ) : (
        <input
          placeholder={placeHolder}
          maxLength={textMaxtLength}
          //className={`${size}`}
        />
      )}
    </div>
  );
};

export default Input;
