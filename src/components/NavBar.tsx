import { PropsWithChildren } from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar: React.FC<any> = (props: PropsWithChildren) => {
  let shownMenu = false;
  function MenuToggle() {
    shownMenu = !shownMenu;
  }

  return (
    <div className={styles.navbar}>
      <nav className={styles.desktop}>
        <ul>
          <li>Thema's</li>
          <li>WERKplaats</li>
          <li>Nieuws</li>
          <li>Materialen</li>
          <li>Community</li>
        </ul>
      </nav>
      {/* <div className={styles.testing}>testing</div> */}
      <nav className={styles.mobile}>
        <ul>
          <li>Thema's</li>
          <li>WERKplaats</li>
          <li>Nieuws</li>
          <li>Materialen</li>
          <li>Community</li>
        </ul>
      </nav>
      <a className={styles.toggle}>
        <button onClick={MenuToggle}>Menu</button>
      </a>
    </div>
  );
};

export default NavBar;
