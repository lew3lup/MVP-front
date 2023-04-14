import cn from "classnames";
import styles from "./ConfirmationPage.module.scss";
import { Card } from "shared/ui";
import Logo from "shared/assets/logo.svg";

export interface ConfirmationPageProps {
  className?: string;
}

const ConfirmationPage = (props: ConfirmationPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      <Card>
        <div>
          <Logo />
          <p className={styles.textBold}>Check your e-mail</p>
        </div>
        <p className={styles.text}>
          We have sent a confirmation email to your email:{" "}
          <span className={styles.email}>test@gmail.com</span>
          Follow the link to confirm your registration
        </p>
      </Card>
    </div>
  );
};

export default ConfirmationPage;
