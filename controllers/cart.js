

export const getCart = (request, response, next) => {
  response.render("shop/orders", {
    pageTitle: "Cart",
    path: "/",
  });
};