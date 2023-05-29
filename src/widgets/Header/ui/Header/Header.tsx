import cn from "classnames";
import styles from "./Header.module.scss";
import Logo from "shared/assets/logo.svg";
import { Link } from "react-router-dom";
import { AppRoutes, RoutePath } from "app/providers/router";

export interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={cn(styles.root, className, {})}>
      <div className={styles.innerContainer}>
        <Link to={RoutePath[AppRoutes.MAIN_PAGE]}>
          <Logo viewBox="0 0 264 47" width={188} height={33} />
        </Link>
      </div>
    </header>
  );
};
