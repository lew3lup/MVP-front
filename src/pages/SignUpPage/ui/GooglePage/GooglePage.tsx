import cn from "classnames";
import styles from "./GooglePage.module.scss";

export interface GooglePageProps {
  className?: string;
}

const GooglePage = (props: GooglePageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      GooglePage
    </div>
  );
};

export default GooglePage;
