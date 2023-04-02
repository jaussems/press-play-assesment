import { PropsWithChildren, useState } from "react";
import styles from "../styles/NavBar.module.scss";
import { clsx } from "clsx";
import Image from "next/image";

const NavBar: React.FC<any> = (props: PropsWithChildren) => {
  let shownMenu: boolean = true;
  const [toggle, setToggle] = useState(false);
  function MenuToggle() {
    console.log("clicked", shownMenu);
    setToggle(!toggle);
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

      <div
        className={clsx({
          [styles.show]: toggle,
          [styles.hide]: !toggle,
        })}
      >
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
      <Image
        src={require("../assets/images/Group 15163.svg")}
        alt={"Logo hoge school"}
      />
      <div className={styles.menubtn} onClick={MenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
