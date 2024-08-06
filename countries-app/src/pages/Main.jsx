import React from "react";
import styles from "./Main.module.css";
import Countries from "../components/Countries";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Countries />
    </div>
  );
};

export default Main;
