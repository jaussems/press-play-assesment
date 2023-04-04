import { IThemeComponent } from "@/shared/models";
import styles from "../styles/Themes.module.scss";
import ThemeButton from "./ThemeButton";

const Themes: React.FC<IThemeComponent> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{props.header}</h1>
        <p>{props.text}</p>
      </div>
      <div className={styles.buttons}>
        {props.themebuttons && props.themebuttons.length > 0
          ? props.themebuttons.map((theme, index) => (
              <ThemeButton
                key={index}
                icon={require(`../assets/icons/${theme.icon}`)}
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
