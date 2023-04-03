import { IArticle } from "@/shared/models";
import styles from "../styles/Article.module.scss";
import Image from "next/image";
import Button from "./Button";

const Article: React.FC<any> = (props: IArticle) => {
  return (
    <div className={styles.article}>
      <div className={styles.text}>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
        <Button text={"lees meer"}></Button>
      </div>
      <div className={styles.image}></div>
      <Image src={props.src} alt={props.alt} height={"400"} width={"400"} />
    </div>
  );
};

export default Article;
