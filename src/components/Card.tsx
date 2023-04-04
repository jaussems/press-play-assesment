import { PropsWithChildren } from "react";
import styles from "../styles/components/Card.module.scss";

const Card: React.FC<PropsWithChildren> = (props) => {
  return <div className={styles.card}>Card</div>;
};

export default Card;
