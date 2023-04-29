import cn from "classnames";
import styles from "./GooglePage.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "shared/const/AccessTokenKey";
import { useEffect } from "react";
import { useAppDispatch } from "shared/hooks";
import { userActions } from "entities/User";

export interface GooglePageProps {
  className?: string;
}

// Страница-костыль, для редиректа после аутентификации, чтобы записать токен в локалсторадж
const GooglePage = (props: GooglePageProps) => {
  const { className } = props;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      dispatch(userActions.setGoogleAuthData(token));
      navigate("/");
    }
  }, [searchParams]);

  return <div className={cn(styles.root, className, {})}></div>;
};

export default GooglePage;
