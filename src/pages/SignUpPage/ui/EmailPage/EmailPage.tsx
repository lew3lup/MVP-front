import cn from "classnames";
import styles from "./EmailPage.module.scss";

export interface EmailPageProps {
  className?: string;
}

const EmailPage = (props: EmailPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      Temporarily unavailable
    </div>
  );
};

export default EmailPage;
