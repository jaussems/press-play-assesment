import { PropsWithChildren } from "react";
import styles from "../styles/components/NavBar.module.scss";

const NavBar: React.FC<any> = (props: PropsWithChildren) => {
  return <div className={styles.navbar}>Navbar</div>;
};

export default NavBar;
