import cn from "classnames";
import Logo from "shared/assets/logo.svg";
import { Button, Card, Input } from "shared/ui";
import styles from "./MetamaskUsernamePage.module.scss";
import { useCallback, useState } from "react";

export interface MetamaskUsernamePageProps {
  className?: string;
}

const MetamaskUsernamePage = (props: MetamaskUsernamePageProps) => {
  const { className } = props;
  const [username, setUsername] = useState("");

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

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
        <Button width="100%">Continue</Button>
      </Card>
    </div>
  );
};

export default MetamaskUsernamePage;
