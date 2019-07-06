const url = "https://pizza-products-api.glitch.me";
const orderURL = "https://order-pizza-api.glitch.me";
let apiLinks = {
  categories: `${url}/categories`,
  products: `${url}/pizzas`,
  details: url + "/pizzas/${id}",
  signup: `${orderURL}/signup`,
  login: `${orderURL}​/login`,
  orders: `${orderURL}/orders`,
  bestsellers: `${url}/best-sellers`,
  productscategory: url + "/pizzas/category/"
};

export { apiLinks };
