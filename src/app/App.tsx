import cn from "classnames";
import "normalize.css";
import { useEffect } from "react";
import { useLayout } from "shared/hooks";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Header } from "widgets/Header";

export const App = () => {
  const isMobile = useLayout();

  useEffect(() => {
    if (isMobile) {
      document.body.className = "app-mobile";
    } else {
      document.body.className = "";
    }
  }, [isMobile]);

  return (
    <div className={cn("app", {}, [])}>
      <Header />
      <AppRouter />
    </div>
  );
};
