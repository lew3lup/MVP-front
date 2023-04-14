import { AppRoutes, RoutePath } from "app/providers/router";
import cn from "classnames";
import { Link } from "react-router-dom";
import MetamaskIcon from "shared/assets/icons/metamask-icon.svg";
import { Button, Card, Icon } from "shared/ui";
import styles from "./MetamaskPage.module.scss";

export interface MetamaskPageProps {
  className?: string;
}

const MetamaskPage = (props: MetamaskPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      <Card>
        <Icon viewBox="0 0 30 29" size={64} Svg={MetamaskIcon} />
        <p className={styles.textBold}>
          Click the login button and sign the message in your wallet
        </p>
        <Button width="100%">Log In</Button>
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

export default MetamaskPage;
