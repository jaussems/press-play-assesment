import styles from "../styles/components/Tag.module.scss";
import { ITag } from "@/shared/models";
const Tag: React.FC<ITag> = (props: ITag) => {
  return (
    <div className={`${styles.container} ${props.class}`}>
      <p>{props.text}</p>
    </div>
  );
};

export default Tag;
