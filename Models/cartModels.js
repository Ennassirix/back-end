const pool = require('../config/connect')

// get all a cart by userID
async function getcartProductByUserID(UserID) {
    try {
        const [rows] = await pool.query('SELECT * FROM cart WHERE UserID = ?', [UserID])
        return rows;
    } catch (error) {
        console.error('failde to get the cart')
        throw error
    }
}
// delete from cart by productID
async function deleteProductByProductID(productID, UserID) {
    try {
        const [row] = await pool.query('DELETE FROM cart WHERE ProductID = ? AND UserID = ?', [productID, UserID])
        return row
    } catch (error) {
        console.error('failed to delete a product from the cart')
        throw error
    }
}
// Clear the cart
async function clearTheCart() {
    try {

    } catch (error) {

    }
}

// Add Item to Cart
async function addToTheCart(data) {
    try {
        const { CartID, UserID, ProductID, Quantity } = data
        const [row] = await pool.query('INSERT INTO cart(CartID,UserID, ProductID, Quantity) VALUES(?, ?, ?, ?)', [CartID, UserID, ProductID, Quantity])
        return row
    } catch (error) {
        console.error('failed to add to the cart')
        throw error
    }
}

module.exports = {
    getcartProductByUserID,
    deleteProductByProductID,
    addToTheCart
}






