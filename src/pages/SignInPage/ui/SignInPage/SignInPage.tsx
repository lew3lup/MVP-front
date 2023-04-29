import { AppRoutes, RoutePath } from "app/providers/router";
import cn from "classnames";
import { Link } from "react-router-dom";
import GoogleIcon from "shared/assets/icons/google-icon.svg";
import MetamaskIcon from "shared/assets/icons/metamask-icon.svg";
import Logo from "shared/assets/logo.svg";
import { Card, Icon, TextInput } from "shared/ui";
import styles from "./SignInPage.module.scss";
import { loginByGoogle } from "features/AuthByGoogle";
import { useAppDispatch } from "shared/hooks";

export interface SignInPageProps {
  className?: string;
}

const SignInPage = (props: SignInPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const signUpWithGoogle = async () => {
    await dispatch(loginByGoogle());
  };

  return (
    <div className={cn(styles.root, className, {})}>
      <Card>
        <Logo />
        <p className={styles.title}>Sign In</p>
        <Link className={styles.textInput} to={RoutePath[AppRoutes.METAMASK]}>
          <TextInput>
            <Icon Svg={MetamaskIcon} />
            <div className={styles.textWrapper}>
              <p className={styles.option}>Connect my wallet</p>
              <p className={styles.description}>Create an account using metamask wallet</p>
            </div>
          </TextInput>
        </Link>
        <TextInput className={styles.textInput} onClick={signUpWithGoogle}>
          <Icon Svg={GoogleIcon} />
          <div className={styles.textWrapper}>
            <p className={styles.option}>Sign up with Google</p>
          </div>
        </TextInput>
        <div className={styles.divider}></div>
        <p className={styles.signInP}>
          Dont have an account?{" "}
          <Link to={RoutePath[AppRoutes.SIGN_UP]}>
            <span className={styles.signInLink}>Create one</span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignInPage;
