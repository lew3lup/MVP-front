import cn from "classnames";
import styles from "./MainPage.module.scss";
import { useSelector } from "react-redux";
import { getUserData, userActions } from "entities/User";
import { Button } from "shared/ui";
import { Link } from "react-router-dom";
import { AppRouter, AppRoutes, RoutePath } from "app/providers/router";
import { useAppDispatch } from "shared/hooks";
import { useCallback } from "react";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const user = useSelector(getUserData);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={cn(styles.root, className, {})}>
      <p>Welcome, {user?.name || "guest"}</p>
      {!user?.name ? (
        <Link to={RoutePath[AppRoutes.SIGN_IN]}>
          <Button>Войти</Button>
        </Link>
      ) : (
        <Button onClick={onLogout}>Выйти</Button>
      )}
    </div>
  );
};

export default MainPage;
