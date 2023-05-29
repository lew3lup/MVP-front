import cn from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, memo, useState } from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "onChange"
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  error?: string;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, error, label, ...restProps } = props;
  const [focus, setFocus] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    if (value === "") {
      setFocus(false);
    }
  };

  return (
    <div className={cn(styles.root, className, { [styles.focus]: focus })}>
      {label && <label className={styles.label}>{`${label}`}</label>}
      <input
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
        className={cn(styles.input, { [styles.errorBorder]: error })}
        value={value}
        onChange={onChangeHandler}
        {...restProps}
      />
      {error && <p className={cn(styles.error, styles.errorColor)}>{error}</p>}
    </div>
  );
});
