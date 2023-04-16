import cn from "classnames";
import styles from "./NotFoundPage.module.scss";

export interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className, {})}>
      Page Not Found
    </div>
  );
};

export default NotFoundPage;