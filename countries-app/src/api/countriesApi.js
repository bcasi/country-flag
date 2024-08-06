import axios from "axios";
const url = "https://restcountries.com/v3.1/all";

async function fetchCountryList() {
  try {
    const data = await axios.get(url);
    if (data.data) {
      return data.data;
    }
  } catch (e) {
    return console.error("Error fetching data:", e.message);
  }
}

export { fetchCountryList };
