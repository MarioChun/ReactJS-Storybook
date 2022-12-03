import { FC, InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

interface checkBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  // disabled : true, false
  // 버튼 클릭 -> 체크 또는 언체크 및 disabled 버튼
}

const CheckBox: FC<checkBoxProps> = ({ text }) => {
  return (
    <div className={styles[`checkboxContainer`]}>
      <input type="checkbox" id="scales" name="scales" />
      <label htmlFor="scales">{text}</label>
    </div>
  );
};

export default CheckBox;
