import cn from "classnames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string | number;
}

export const Button = (props: ButtonProps) => {
  const { className, children, width } = props;

  const style = {
    width,
  };

  return (
    <button style={style} className={cn(styles.root, className, {})}>
      {children}
    </button>
  );
};
