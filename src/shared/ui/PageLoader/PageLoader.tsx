import cn from "classnames";
import styles from "./PageLoader.module.scss";
import { Loader } from "shared/ui";

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <Loader />
    </div>
  );
};
