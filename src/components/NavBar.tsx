import { PropsWithChildren } from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar: React.FC<any> = (props: PropsWithChildren) => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li>Thema's</li>
          <li>WERKplaats</li>
          <li>Nieuws</li>
          <li>Materialen</li>
          <li>Community</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
