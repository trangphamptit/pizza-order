import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getProductscategory() {
  try {
    const { data } = await axios.get(apiLinks.productscategory);
    return data;
  } catch (err) {
    console.log(err);
  }
}
