import React, { PropsWithChildren } from "react";
import styles from "../styles/Search.module.scss";

const Search: React.FC<any> = (props: PropsWithChildren) => {
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <h1>Hét platform voor een betere samenwerking VO-HO regio Rotterdam</h1>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Search;
