import cn from "classnames";
import styles from "./TextInput.module.scss";
import { HTMLAttributes } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { className, children } = props;

  return <div className={cn(styles.root, className, {})}>{children}</div>;
};
