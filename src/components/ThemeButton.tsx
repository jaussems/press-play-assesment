import styles from "../styles/Themes.module.scss";
import Image from "next/image";
import { IThemeButton } from "@/shared/models";

const ThemeButton: React.FC<IThemeButton> = (props) => {
  return (
    <div className={styles.themebutton}>
      <Image src={props.src} alt={props.alt} />
      <p>{props.text}</p>
      <Image
        src={require("../assets/icons/ic_arrowcircle_inverted.svg")}
        alt={"Arrow icon pointing to the right"}
        width={"2"}
        height={"2"}
      />
    </div>
  );
};

export default ThemeButton;
