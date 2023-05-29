import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  width?: string | number;
}

export const Button = (props: ButtonProps) => {
  const { className, children, width, ...otherProps } = props;

  const style = {
    width,
  };

  return (
    <button style={style} className={cn(styles.root, className, {})} {...otherProps}>
      {children}
    </button>
  );
};
