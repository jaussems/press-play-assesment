import { IArticle, ITag } from "@/shared/models";
import styles from "../styles/components/Article.module.scss";
import Image from "next/image";
import Button from "./Button";
import Tag from "./Tag";
import { clsx } from "clsx";

const Article: React.FC<any> = (props: IArticle) => {
  return (
    <div className={`${styles.article}  `}>
      <div
        className={clsx(
          {
            [styles.flipped]: props.isFlipped,
          },
          `${styles["article_container"]} ${styles[`${props.class}`]} `
        )}
      >
        <div className={styles.text}>
          <div className={styles.tags}>
            {props.tags && props.tags.length > 0
              ? props.tags.map((tag: ITag, index: number) => (
                  <div key={index} className={`${styles[`${props.tagClass}`]}`}>
                    <Tag text={tag.text}></Tag>
                  </div>
                ))
              : null}
          </div>
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
