import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getBestsellers() {
  try {
    const { data } = await axios.get(apiLinks.bestsellers);
    // console.log("data", data);

    return data;
  } catch (err) {
    console.log(err);
  }
}
