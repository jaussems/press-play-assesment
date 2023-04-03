import React, { PropsWithChildren } from "react";
import styles from "../styles/Search.module.scss";
import Input from "./Input";
import Image from "next/image";

const Search: React.FC<any> = (props: PropsWithChildren) => {
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <h1>
          Hét platform voor een betere samenwerking VO-HO{" "}
          <span className={styles.highlight}>regio Rotterdam</span>
        </h1>
        <Input></Input>
        <Input></Input>
      </div>
      <div className={styles.image}>
        <Image
          src={require("../assets/images/intro_image.png")}
          alt={"Happy guy with book"}
        />
      </div>
    </div>
  );
};

export default Search;
