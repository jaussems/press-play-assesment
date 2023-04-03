import React, { PropsWithChildren } from "react";
import styles from "../styles/Search.module.scss";
import Input from "./Input";
import Image from "next/image";
import Button from "./Button";

const Search: React.FC<any> = (props: PropsWithChildren) => {
  return (
    <div className={styles.search}>
      <div className={styles.header_and_inputs}>
        <h1>
          Hét platform voor een betere samenwerking VO-HO{" "}
          <span className={styles.highlight}>regio Rotterdam</span>
        </h1>

        <div className={styles.inputs}>
          <Input
            placeholder={"Zoek naar materialen"}
            className={styles.inputsearch}
            class={styles["search--search-width"]}
            icon={true}
          ></Input>
          <Input
            placeholder={"Alle niveaus"}
            className={styles.inputselect}
            class={styles["search--select-width"]}
          >
            {" "}
          </Input>
          <Button text={"Zoeken"}></Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={require("../assets/images/intro_image.png")}
          alt={"Happy guy with book"}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Search;
