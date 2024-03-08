const pool = require('../config/connect')


// TO get all products : 
async function getAllProducts() {
    try {
        const [rows] = await pool.query('SELECT * FROM Products JOIN categories ON categories.CategoryID = Products.CategoryID');
        return rows
    } catch (error) {
        console.error('Failed to get All Products')
        throw error
    }
}

// to get single products by ID :
async function getProductById(id) {
    try {
        const [rows] = await pool.query('SELECT * FROM Products JOIN categories ON categories.CategoryID = Products.CategoryID WHERE Products.ProductID = ?', [id])
        return rows
    } catch (error) {
        console.error('Failed to get Product by id')
        throw error
    }
}
// to get a products by category :
async function getProductByCategory(category) {
    try {
        const [row] = await pool.query('SELECT * FROM Products JOIN categories ON categories.CategoryID = Products.CategoryID WHERE categories.CategoryName = ?', [category])
        return row
    } catch (error) {
        console.error('Failed to get Product by category')
        throw error
    }
}

// to search for a product by name : 
async function searchForProductByName(name) {
    try {
        const [row] = await pool.query('SELECT * FROM Products JOIN categories ON categories.CategoryID = Products.CategoryID WHERE Products.Name = ?', [name])
        return row
    } catch (error) {
        console.error('Failed to search for a  Product by name')
        throw error
    }
}

// to update a product :
async function updateProduct(id, data) {
    try {
        const { Name, Description, ImageURL, Price, StockQuantity, CategoryID } = data
        const [row] = await pool.query(' UPDATE Products SET Name=?,Description= ?,ImageURL= ?,Price= ?,StockQuantity= ?,CategoryID= ? WHERE ProductID = ?', [Name, Description, ImageURL, Price, StockQuantity, CategoryID, id])
        return row
    } catch (error) {
        console.error('Failed to update a  Product by id')
        throw error
    }
}

// to delete a product by id :
async function deleteProduct(id) {
    try {
        const [row] = await pool.query('DELETE FROM Products WHERE ProductID = ?', [id])
        return row;
    } catch (error) {
        console.error('Failed to dalete a  Product by id')
        throw error
    }
}

// create a product : 
async function createProduct(data) {
    try {
        const { ProductID, Name, Description, ImageURL, Price, StockQuantity, CategoryID } = data
        const [row] = await pool.query('INSERT INTO Products(ProductID, Name, Description, ImageURL, Price, StockQuantity, CategoryID) VALUES(?,?,?,?,?,?,?)', [ProductID, Name, Description, ImageURL, Price, StockQuantity, CategoryID])
        return row
    } catch (error) {
        console.error('Failed to create a  Product ')
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByCategory,
    searchForProductByName,
    updateProduct,
    deleteProduct,
    createProduct
}