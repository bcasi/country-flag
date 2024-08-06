import React from "react";
import styles from "./CountryList.module.css";

const CountryList = ({ flags, name }) => {
  return (
    <div className={styles.wrapper}>
      <img src={flags} alt="country-flag" width={150} height={150} />
      <p>{name}</p>
    </div>
  );
};

export default CountryList;
