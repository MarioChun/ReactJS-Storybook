//this binding 차이
import { ButtonHTMLAttributes } from "react";
import "./button.css";

type buttonProps = {
  text: string;
  designType: "primary" | "default" | "text" | "link";
  size: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button_study: React.FC<buttonProps> = ({ designType, text, size }) => {
  return <button className={`${designType} ${size}`}>{text}</button>;
};

export default Button_study;
