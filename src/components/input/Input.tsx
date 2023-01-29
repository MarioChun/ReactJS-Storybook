import React, { InputHTMLAttributes, ReactElement } from "react";
import styles from "./Input.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix" | "suffix" | "onChange"
> & {
  size?: "small" | "default" | "large";
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
  addOnBefore?: string | ReactElement;
  addOnAfter?: string | ReactElement;
  clear?: boolean;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  size = "default",
  className,
  prefix,
  suffix,
  addOnBefore,
  addOnAfter,
  clear = false,
  ...props
}) => {
  const classNames = [
    styles.outerContainer,
    styles[size],
    addOnBefore ? styles.addOnBefore : "",
    addOnAfter ? styles.addOnAfter : "",
    props.readOnly ? styles.readOnly : "",
    className,
  ].join(" ");
  return (
    <div className={classNames}>
      {addOnBefore && (
        <div className={styles.addOnContainer}>{addOnBefore}</div>
      )}
      <div className={styles.inputContainer}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          type={type}
          className={styles.input}
          {...props}
          onChange={(event) => props.onChange?.(event.currentTarget.value)}
        />
        {clear && (
          <AiFillCloseCircle
            className={styles.closeCircle}
            onMouseDown={(event) => {
              props.onChange?.("");
              event.preventDefault();
            }}
          />
        )}
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
      {addOnAfter && <div className={styles.addOnContainer}>{addOnAfter}</div>}
    </div>
  );
};

export default Input;
