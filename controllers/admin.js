
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });

};

exports.getEditProduct = (req, res, next) => {

    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
    });

};

exports.postAddProduct = (req, res, next) => {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();

    res.redirect('/admin/products');

};

exports.postEditProduct = (req, res, next) => {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    //product.update();

    res.redirect('/admin/products');

};

exports.getProducts = (req, res, next) => {

    const products = Product.fetchAll(products => {

        res.render('admin/products', {
            prods: products,
            pageTitle: 'All Products',
            path: '/admin/products',
            hasProducts: products.length > 0,
        });

    });

};
