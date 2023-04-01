import { PropsWithChildren } from "react";
import styles from "../styles/components/Article.module.scss";

const Article: React.FC<any> = (props: PropsWithChildren) => {
  return <div className={styles.article}>Article</div>;
};

export default Article;
