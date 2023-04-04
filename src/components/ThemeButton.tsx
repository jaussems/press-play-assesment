import styles from "../styles/Themes.module.scss";
import Image from "next/image";
import { IThemeButton } from "@/shared/models";

const ThemeButton: React.FC<IThemeButton> = (props) => {
  return (
    <div className={styles.themebutton}>
      <Image src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  );
};

export default ThemeButton;
