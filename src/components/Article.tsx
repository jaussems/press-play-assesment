import { IArticle } from "@/shared/models";
import styles from "../styles/Article.module.scss";
import Image from "next/image";
import Button from "./Button";

const Article: React.FC<any> = (props: IArticle) => {
  return (
    <div className={`${styles.article}  `}>
      <div
        className={`${styles["article_container"]} ${
          styles[`${props.class}`]
        } `}
      >
        <div className={styles.text}>
          <h1>{props.header}</h1>
          <p>{props.paragraph}</p>
          <Button isLight={props.isLightBtn} text={props.buttonText}></Button>
        </div>
        <div className={styles.image}>
          <Image src={props.src} alt={props.alt} height={"300"} width={"300"} />
        </div>
      </div>
    </div>
  );
};

export default Article;
