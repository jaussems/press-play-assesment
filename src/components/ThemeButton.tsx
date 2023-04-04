import styles from "../styles/ThemeButton.module.scss";
import Image from "next/image";
import { IThemeButton } from "@/shared/models";

const ThemeButton: React.FC<IThemeButton> = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.icon} alt={props.alt} />
      <p>{props.text}</p>
      <Image
        src={require("../assets/icons/ic_arrowcircle_inverted.svg")}
        alt={"Arrow icon pointing to the right"}
        className={styles.arrow}
      />
    </div>
  );
};

export default ThemeButton;
