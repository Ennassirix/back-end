const express = require('express');
const router = express.Router();
const productModel = require('../Models/productsModels');

router.get('/', async (req, res, next) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await productModel.getProductById(id)
        res.json(product)
    } catch (error) {
        next(error)
    }
})


router.get('/category/:category', async (req, res, next) => {
    try {
        const category = req.params.category
        const product = await productModel.getProductByCategory(category)
        res.json(product)
    } catch (error) {
        next(error)
    }
})

router.get('/search/:name', async (req, res, next) => {
    try {
        const name = req.params.name
        const product = await productModel.searchForProductByName(name)
        res.json(product)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = {
            Name: req.body.Name, // Corrected from req.body.name
            Description: req.body.Description,
            ImageURL: req.body.ImageURL,
            Price: req.body.Price,
            StockQuantity: req.body.StockQuantity,
            CategoryID: req.body.CategoryID
        };
        const product = await productModel.updateProduct(id, data)
        res.json(product)
    } catch (error) {
        next(error)
    }
})
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await productModel.deleteProduct(id)
        res.json(product)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = {
            ProductID: req.body.ProductID,
            Name: req.body.Name,
            Description: req.body.Description,
            ImageURL: req.body.ImageURL,
            Price: req.body.Price,
            StockQuantity: req.body.StockQuantity,
            CategoryID: req.body.CategoryID
        }
        const product = await productModel.createProduct(data)
        res.json(product)
    } catch (error) {
        next(error)
    }
})


module.exports = router;
