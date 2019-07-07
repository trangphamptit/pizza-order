import axios from "axios";
import { apiLinks } from "./APILinks";
export async function getProductscategory(id) {
  try {
    const { data } = await axios.get(`${apiLinks.productscategory}/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
