import { PropsWithChildren } from "react";
import styles from "../styles/Themes.module.scss";

const Themes: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return <div className={styles.themes}></div>;
};

export default Themes;
