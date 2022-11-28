//this binding 차이
import { ButtonHTMLAttributes } from "react";
import "./button_study.css";

type Button_StudyProps = {
  text: string;
  designType: "primary" | "default" | "text" | "link";
  size: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button_study: React.FC<Button_StudyProps> = ({
  designType,
  text,
  size,
}) => {
  return <button className={`${designType} ${size}`}>{text}</button>;
};

export default Button_study;
