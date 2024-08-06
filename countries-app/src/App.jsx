import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Main from "./pages/Main";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);

  async function fetchCountryList() {
    const url = "https://xcountries-backend.azurewebsites.net/all";

    try {
      const data = await fetch(url);
      const json = await data.json();
      console.log(json[0]);
      return json;
    } catch (e) {
      return console.error("Error fetching data:", e.message);
    }
  }
  useEffect(() => {
    fetchCountryList().then((res) => {
      setCountry(res);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.wrapper2}>
        {country?.length > 0 &&
          country.map((res) => {
            return (
              <div className={styles.wrapper3} key={res.name}>
                <img
                  src={res.flag}
                  alt="country-flag"
                  width={150}
                  height={150}
                />
                <p>{res.name}</p>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
