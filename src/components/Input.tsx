//this binding 차이
import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputType = InputHTMLAttributes<HTMLInputElement>;

type CustomInput = Omit<InputType, "size">;

interface IInputProps extends CustomInput {
  placeholder: string;
  size?: "sm" | "md" | "lg";
  textArea?: true | false;
  textMaxtLength?: number;
  icon?: boolean;
}

const Input: FC<IInputProps> = ({
  placeholder,
  size,
  textArea,
  textMaxtLength,
  icon,
}) => {
  return (
    <div>
      {textArea === true ? (
        <div className={styles[`inputContainer`]}>
          <textarea placeholder={placeholder} />
        </div>
      ) : icon === true ? (
        <div className={styles[`search`]}>
          <input
            className={styles[`iconInput`]}
            type="text"
            placeholder={placeholder}
            maxLength={textMaxtLength}
          />
          <img
            className={styles[`iconImg`]}
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          />
        </div>
      ) : (
        <div className={styles[`inputContainer`]}>
          <input
            placeholder={placeholder}
            maxLength={textMaxtLength}
            className={styles[`${size}`]}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
