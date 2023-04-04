import { PropsWithChildren, useState } from "react";
import styles from "../styles/components/NavBar.module.scss";
import { clsx } from "clsx";
import Image from "next/image";

const NavBar: React.FC<any> = (props: PropsWithChildren) => {
  let shownMenu: boolean = true;
  const [toggle, setToggle] = useState(false);
  function MenuToggle() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.navbar}>
      <nav className={styles.desktop}>
        <ul>
          <li className={styles.logo}>
            <Image
              src={require("../assets/images/Group 15163.svg")}
              alt={"Logo hoge school"}
            />
          </li>
          <li>Thema's</li>
          <li>WERKplaats</li>
          <li>Nieuws</li>
          <li>Materialen</li>
          <li>Community</li>
          <li>
            <div className={styles.search_and_login}>
              <Image
                src={require("../assets/icons/search_icon.svg")}
                alt={"Search icon"}
                className={styles.search_icon}
              />
              <button className={styles.loginbutton}>Aanmelden</button>
            </div>
          </li>
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
      <div className={styles.mobile_view}>
        <Image
          src={require("../assets/images/Group 15163.svg")}
          alt={"Logo hoge school"}
          className={styles.logo}
        />

        <div className={styles.menubtn} onClick={MenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
