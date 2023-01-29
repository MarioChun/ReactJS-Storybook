import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  designType?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "large" | "medium" | "small";
  text: string;
  block?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  danger?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  designType = "default",
  text,
  block = false,
  size = "default",
  icon,
  loading = false,
  danger = false,
  className,
  ...props
}) => {
  const classNames = [
    styles.button,
    block ? styles.block : "",
    loading ? styles.loading : "",
    danger ? styles.danger : "",
    styles[size],
    styles[designType],
    className,
  ].join(" ");

  return (
    <button className={classNames} {...props}>
      {loading && <AiOutlineLoading3Quarters />}
      {icon != null && loading ? null : icon}
      {text}
    </button>
  );
};

export default Button;
