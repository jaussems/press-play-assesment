import { IArticle } from "@/shared/models";
import styles from "../styles/Article.module.scss";
import Image from "next/image";

const Article: React.FC<any> = (props: IArticle) => {
  return (
    <div className={styles.article}>
      <div className={styles.text}>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>
      <div className={styles.image}></div>
      <Image src={props.src} alt={props.alt} />
    </div>
  );
};

export default Article;
