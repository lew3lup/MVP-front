import { AppRoutes, RoutePath } from "app/providers/router";
import cn from "classnames";
import { getUserData, getUserInited, userActions } from "entities/User";
import { verifyByFractal } from "features/AuthByGoogle";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";
import { Button, Checkbox, Loader } from "shared/ui";
import styles from "./MainPage.module.scss";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const user = useSelector(getUserData);
  const _inited = useSelector(getUserInited);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onVerify = useCallback(() => {
    dispatch(verifyByFractal());
  }, [dispatch]);

  console.log(_inited);

  return _inited ? (
    <div className={cn(styles.root, className, {})}>
      <p>Welcome, {user?.name || "guest"}</p>
      {user?.isVerified && <p>Верифицирован</p>}
      {!user?.name ? (
        <Link to={RoutePath[AppRoutes.SIGN_IN]}>
          <Button>Войти</Button>
        </Link>
      ) : (
        <Button onClick={onLogout}>Выйти</Button>
      )}
      {!user?.isVerified && <Button onClick={onVerify}>Верифицировать</Button>}
      {/* <div>
        <Checkbox label="some label" checked />
        <Checkbox label="another label" checked disabled />
      </div> */}
    </div>
  ) : (
    <div className={cn(styles.root, className, {})}>
      <Loader />
    </div>
  );
};

export default MainPage;
