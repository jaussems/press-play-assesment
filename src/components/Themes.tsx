import { IThemeComponent } from "@/shared/models";
import styles from "../styles/Themes.module.scss";
import ThemeButton from "./ThemeButton";

const Themes: React.FC<IThemeComponent> = (props) => {
  return (
    <div className={styles.themes}>
      <div className={styles["themes__text"]}>
        <h1>{props.header}</h1>
        <p>{props.text}</p>
      </div>
      <div className={styles["themes__buttons"]}>
        {props.themebuttons && props.themebuttons.length > 0
          ? props.themebuttons.map((theme) => (
              <ThemeButton
                icon={theme.icon}
                alt={`${theme.icon}`}
                text={theme.text}
              ></ThemeButton>
            ))
          : null}
      </div>
    </div>
  );
};

export default Themes;
