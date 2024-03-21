// import Product from "../src/model/product.js";
import Products from "../data/data.js";

export const getIndex = (request, response, next) => {
  console.log("Product list: ", Products);
  response.render("shop/index", {
    pageTitle: "Shop",
    path: "/",
    products: Products,
  });
};


