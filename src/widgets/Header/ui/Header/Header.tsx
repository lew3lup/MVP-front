import cn from "classnames";
import styles from "./Header.module.scss";
import Logo from "shared/assets/logo.svg";

export interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={cn(styles.root, className, {})}>
      <div className={styles.innerContainer}>
        <Logo viewBox="0 0 264 47" width={188} height={33} />
      </div>
    </header>
  );
};
