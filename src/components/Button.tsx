import styles from "../styles/Button.module.scss";
import { IButton } from "@/shared/models";

const Button: React.FC<any> = (props: IButton) => {
  return (
    <div className={styles.button}>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
