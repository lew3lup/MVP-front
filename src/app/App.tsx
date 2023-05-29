import cn from "classnames";
import { fetchUserData, userActions } from "entities/User";
import "normalize.css";
import { useEffect } from "react";
import { useAppDispatch, useLayout } from "shared/hooks";
import { Header } from "widgets/Header";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const isMobile = useLayout();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMobile) {
      document.body.className = "app-mobile";
    } else {
      document.body.className = "";
    }
  }, [isMobile]);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={cn("app", {}, [])}>
      <Header />
      <AppRouter />
    </div>
  );
};
