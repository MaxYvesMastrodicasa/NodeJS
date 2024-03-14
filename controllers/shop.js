// import Product from "../src/model/product.js";
import Products from "../data/data.js";

export const getIndex = (request, response, next) => {
  console.log("Product list: ", Products);
  response.render("shop/index", {
    pageTitle: "Shop",
    path: "/",
    products: Products,
  });
  // Product
  //     .fetchAll()
  //     .then(([rows, fieldData]) => {
  //         res.render('shop/index', {
  //             pageTitle: 'Shop',
  //             path: '/',
  //             products: rows
  //         });
  //     })
  //     .catch(err => {
  //         if(err) console.log(err);
  //     });
};

// export const getProducts = (req, res, next) => {
//   Product.fetchAll()
//     .then(([rows, fieldData]) => {
//       res.render("shop/product-list", {
//         pageTitle: "All Products",
//         path: "/products",
//         products: rows,
//       });
//     })
//     .catch((err) => {
//       if (err) console.log(err);
//     });
// };

// export const getProduct = (req, res, next) => {
//   const productId = req.params.productId;
//   Product.fetch(productId)
//     .then(([rows]) => {
//       const product = rows[0];
//       res.render("shop/product-details", {
//         pageTitle: product.title,
//         path: "/products",
//         product: product,
//       });
//     })
//     .catch((err) => {
//       if (err) console.log(err);
//     });
// };

// export const getCart = (req, res, next) => {
//   Cart.fetchAll((cart) => {
//     Product.fetchAll((products) => {
//       const newProducts = [];
//       for (let product of products) {
//         let cartProductData = cart.products.find(
//           (prod) => prod.id === product.id
//         );
//         if (cartProductData) {
//           newProducts.push({ ...product, quantity: cartProductData.quantity });
//         }
//       }
//       const newCart = {
//         products: newProducts,
//         totalPrice: cart.totalPrice,
//       };
//       res.render("shop/cart", {
//         pageTitle: "Your Cart",
//         path: "/cart",
//         cart: newCart,
//       });
//     });
//   });
// };

// export const postCart = (req, res, next) => {
//   const productId = req.body.productId;
//   Product.fetch(productId, (product) => {
//     Cart.addProduct(productId, product.price);
//   });
//   res.redirect("/cart");
// };

// export const postDeleteCartProduct = (req, res, next) => {
//   Product.fetch(req.body.productId, (product) => {
//     Cart.removeProduct(product.id, product.price, (err) => {
//       if (!err) {
//         res.redirect("/cart");
//       }
//     });
//   });
// };

// export const getOrders = (req, res, next) => {
//   res.render("shop/orders", {
//     pageTitle: "Your Orders",
//     path: "/orders",
//   });
// };

// export const getCheckout = (req, res, next) => {
//   res.render("shop/checkout", {
//     pageTitle: "Checkout",
//     path: "/checkout",
//   });
// };



