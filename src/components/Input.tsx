//this binding 차이
import { text } from "node:stream/consumers";
import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type inputType = InputHTMLAttributes<HTMLInputElement>;

type customInput = Omit<inputType, "size">;

interface inputProps extends customInput {
  placeHolder: string;
  size?: "sm" | "md" | "lg";
  textArea?: true | false;
  textMaxtLength?: number;
  icon?: true | false;
}

const Input: FC<inputProps> = ({
  placeHolder,
  size,
  textArea,
  textMaxtLength,
  icon,
}) => {
  return (
    <div>
      {textArea === true ? (
        <textarea placeholder={placeHolder} />
      ) : icon === true ? (
        <div className={styles[`search`]}>
          <input
            className={styles[`icon-input`]}
            type="text"
            placeholder={placeHolder}
            maxLength={textMaxtLength}
          />
          <img
            className={styles[`icon-img`]}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          />
        </div>
      ) : (
        <input
          placeholder={placeHolder}
          maxLength={textMaxtLength}
          className={styles[`${size}`]}
        />
      )}
    </div>
  );
};

export default Input;
