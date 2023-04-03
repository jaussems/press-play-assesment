import { PropsWithChildren } from "react";
import styles from "../styles/Input.module.scss";
import { IinputComponent } from "@/shared/models";

const Input: React.FC<any> = (props: IinputComponent) => {
  return (
    <div className={styles.input_container}>
      <input className={styles.input} placeholder={props.placeholder}></input>
    </div>
  );
};

export default Input;
