import cn from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  label?: string;
  checked?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, label, checked = false, ...restProps } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.root}>
        <input
          className={cn(styles.checkbox, className, {})}
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          {...restProps}
        />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
};
