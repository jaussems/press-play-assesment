import { PropsWithChildren } from "react";
import styles from "../styles/Themes.module.scss";

const Themes: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <div className={styles.themes}>
      <div className={styles["themes__text"]}></div>
      <div className={styles["themes__buttons"]}></div>
    </div>
  );
};

export default Themes;
