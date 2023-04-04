import styles from "../styles/components/Button.module.scss";
import { IButton } from "@/shared/models";
import { clsx } from "clsx";

const Button: React.FC<any> = (props: IButton) => {
  return (
    <div className={styles.button}>
      <button
        className={clsx({
          [styles["light"]]: props.isLight,
          [styles["dark"]]: !props.isLight,
        })}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
