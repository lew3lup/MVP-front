import cn from "classnames";
import { Link } from "react-router-dom";
import GoogleIcon from "shared/assets/icons/google-icon.svg";
import MailIcon from "shared/assets/icons/mail-icon.svg";
import MetamaskIcon from "shared/assets/icons/metamask-icon.svg";
import Logo from "shared/assets/logo.svg";
import { Card, Icon, TextInput } from "shared/ui";
import styles from "./SignUpPage.module.scss";
import { AppRoutes, RoutePath } from "app/providers/router";

export interface SignUpPageProps {
  className?: string;
}

const SignUpPage = (props: SignUpPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      <Card>
        <div>
          <Logo />
          <p className={styles.title}>Create an account</p>
        </div>
        <Link className={styles.textInput} to={RoutePath[AppRoutes.METAMASK]}>
          <TextInput>
            <Icon Svg={MetamaskIcon} />
            <div className={styles.textWrapper}>
              <p className={styles.option}>Connect my wallet</p>
              <p className={styles.description}>Create an account using metamask wallet</p>
            </div>
          </TextInput>
        </Link>
        <div className={styles.divider}></div>
        <Link className={styles.textInput} to={RoutePath[AppRoutes.GOOGLE]}>
          <TextInput>
            <Icon Svg={GoogleIcon} />
            <div className={styles.textWrapper}>
              <p className={styles.option}>Sign up with Google</p>
            </div>
          </TextInput>
        </Link>
        <Link className={styles.textInput} to={RoutePath[AppRoutes.EMAIL]}>
          <TextInput>
            <Icon Svg={MailIcon} />
            <div className={styles.textWrapper}>
              <p className={styles.option}>Sign up with your E-Mail</p>
            </div>
          </TextInput>
        </Link>
        <div className={styles.divider}></div>
        <p className={styles.signInP}>
          Already have an account?{" "}
          <Link to={RoutePath[AppRoutes.SIGN_IN]}>
            <span className={styles.signInLink}>Sign In</span>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUpPage;
