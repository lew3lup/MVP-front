import cn from "classnames";
import { ChangeEvent, DetailedHTMLProps, memo, SelectHTMLAttributes, useMemo } from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

type HTMLSelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "value" | "onChange"
>;

export interface SelectProps extends HTMLSelectProps {
  className?: string;
  label?: string;
  options?: Array<SelectOption>;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, ...restProps } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={styles.option} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <select className={styles.root} value={value} onChange={onChangeHandler} {...restProps}>
        {optionsList}
      </select>
    </div>
  );
});
