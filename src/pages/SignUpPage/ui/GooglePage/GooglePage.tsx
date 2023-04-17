import cn from "classnames";
import styles from "./GooglePage.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";
import { useEffect } from "react";

export interface GooglePageProps {
  className?: string;
}

// Страница-костыль, для редиректа после аутентификации, чтобы записать токен в локалсторадж
const GooglePage = (props: GooglePageProps) => {
  const { className } = props;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("token")) {
      localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(searchParams.get("token")));
      navigate("/");
    }
  }, [searchParams]);

  return <div className={cn(styles.root, className, {})}></div>;
};

export default GooglePage;
