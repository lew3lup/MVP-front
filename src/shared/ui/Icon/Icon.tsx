import cn from "classnames";
import styles from "./Icon.module.scss";
import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number | string;
  viewBox?: string;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, size, viewBox, ...otherProps } = props;

  const style = {
    width: size, // 32px by default
    height: size,
  };

  return (
    <div style={style} className={cn(styles.wrapper, className, {})} {...otherProps}>
      {size ? (
        <Svg viewBox={viewBox} width={size} height={size} className={styles.root} />
      ) : (
        <Svg className={styles.root} />
      )}
    </div>
  );
};
