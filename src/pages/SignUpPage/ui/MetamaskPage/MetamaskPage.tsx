import { AppRoutes, RoutePath } from "app/providers/router";
import cn from "classnames";
import { getUserToken, userActions } from "entities/User";
import { authReducer, loginByMetamask } from "features/AuthByGoogle";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import MetamaskIcon from "shared/assets/icons/metamask-icon.svg";
import { DynamicModuleLoader, ReducersList } from "shared/components";
import { useAppDispatch } from "shared/hooks";
import { Button, Card, Icon } from "shared/ui";
import { checkIfWalletIsConnected, connect } from "../../lib/metamaskConnect";
import styles from "./MetamaskPage.module.scss";

export interface MetamaskPageProps {
  className?: string;
}

const reducers: ReducersList = { authData: authReducer };

const MetamaskPage = (props: MetamaskPageProps) => {
  const { className } = props;
  const [userAddress, setUserAddress] = useState<string>("");
  const dispatch = useAppDispatch();
  const token = useSelector(getUserToken);

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
    if (!token) {
      dispatch(loginByMetamask(userAddress));
    }
  }, [userAddress, token]);

  const onLogin = useCallback(() => {
    connect(setUserAddress);
  }, []);

  return (
    // token ? (
    //   <Navigate to={RoutePath[AppRoutes.METAMASK_USERNAME]} />
    // ) : (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.root, className, {})}>
        <Card>
          <Icon viewBox="0 0 30 29" size={64} Svg={MetamaskIcon} />
          <p className={styles.textBold}>
            Click the login button and sign the message in your wallet
          </p>
          <Button width="100%" onClick={onLogin}>
            Log In
          </Button>
          <p className={styles.signInP}>
            Dont have an account?{" "}
            <Link to={RoutePath[AppRoutes.SIGN_UP]}>
              <span className={styles.signInLink}>Create one</span>
            </Link>
          </p>
        </Card>
      </div>
    </DynamicModuleLoader>
  );
};

export default MetamaskPage;
