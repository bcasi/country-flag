import axios from "axios";
const url = "https://restcountries.com/v3.1/all";

async function fetchCountryList() {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {
    console.error("Error fetching data:", e);
    return;
  }
}

export { fetchCountryList };
