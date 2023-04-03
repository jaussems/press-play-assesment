import { PropsWithChildren } from "react";
import styles from "../styles/Tag.module.scss";
import { ITag } from "@/shared/models";
const Tag: React.FC<any> = (props: ITag) => {
  return <div className={styles.tag}>{props.text}</div>;
};

export default Tag;
