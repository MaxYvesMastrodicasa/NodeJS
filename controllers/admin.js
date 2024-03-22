import db from "../utils/database.js";

// CREATE
export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const [result] = await db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
    res.status(201).json({ id: result.insertId, name, price });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// READ
export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.render('shop', { products: rows });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    await db.query('UPDATE products SET name = ?, price = ?, description = ?, imageURL = ? WHERE id = ?', [name, price,description,imageURL, id]);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM products WHERE id = ?', [id]);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Correction du prof
// const Product = require('../models/product');

// module.exports.postAddProduct = (req, res, next) => {
//     const product = new Product(
//         null,
//         req.body.title,
//         req.body.imageUrl,
//         req.body.description,
//         req.body.price
//     );
//     product
//         .save()
//         .then(() => {
//             res.redirect('/');
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };

// module.exports.getAddProduct = (req, res, next) => {
//     res.render('admin/edit-product', {
//         pageTitle:'Add Product',
//         path: '/admin/add-product',
//         editing: false
//     });
// };


// module.exports.getEditProduct = (req, res, next) => {
//     // fetch the specific product details
//     const editMode = req.query.edit;
//     if(!editMode) return res.redirect('/');
//     const productId = req.params.productId;
//     Product
//         .fetch(productId)
//         .then(([rows]) => {
//             const product = rows[0];
//             if(!product) res.redirect('/');
//             res.render('admin/edit-product', {
//                 pageTitle: product.title,
//                 path: '/admin/products',
//                 editing: editMode,
//                 product: product
//             });
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };

// module.exports.postEditProduct = (req, res, next) => {
//     const product = new Product(
//         req.body.id,
//         req.body.title,
//         req.body.imageUrl,
//         req.body.description,
//         req.body.price
//     );
//     product
//         .update()
//         .then(() => {
//             res.redirect('/admin/products');
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };

// module.exports.getProducts = (req, res, next) => {
//     Product
//         .fetchAll()
//         .then(([rows]) => {
//             res.render('admin/product-list', {
//                 pageTitle: 'All Products',
//                 path: '/admin/products',
//                 products: rows
//             });
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };

// module.exports.postDeleteProduct = (req, res, next) => {
//     Product
//         .delete(req.body.productId)
//         .then((result) => {
//             console.log('delete result:', result);
//             res.redirect('/admin/products');
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };