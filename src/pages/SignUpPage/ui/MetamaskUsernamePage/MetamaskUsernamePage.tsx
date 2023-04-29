import cn from "classnames";
import { setName } from "entities/User";
import { useCallback, useState } from "react";
import Logo from "shared/assets/logo.svg";
import { useAppDispatch } from "shared/hooks";
import { Button, Card, Input } from "shared/ui";
import styles from "./MetamaskUsernamePage.module.scss";

export interface MetamaskUsernamePageProps {
  className?: string;
}

const MetamaskUsernamePage = (props: MetamaskUsernamePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(setName(username));
  }, [username]);

  return (
    <div className={cn(styles.root, className, {})}>
      <Card>
        <div>
          <Logo />
          <p className={styles.textBold}>Enter your username</p>
        </div>
        <Input
          className={styles.input}
          value={username}
          onChange={onChangeUsername}
          label="Username"
        />
        <Button onClick={onSubmit} width="100%">
          Continue
        </Button>
      </Card>
    </div>
  );
};

export default MetamaskUsernamePage;
