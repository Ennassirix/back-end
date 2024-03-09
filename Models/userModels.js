const pool = require('../config/connect')


// create a user : 
async function createUser(data) {
    try {
        const { FirstName, LastName, Email, Password, PhoneNumber } = data;
        const [row] = await pool.query('INSERT INTO users(FirstName, LastName, Email, Password, PhoneNumber) VALUES (?,?,?,?,?)', [FirstName, LastName, Email, Password, PhoneNumber])
        return row
    } catch (error) {
        console.error('failed to create a user')
        throw error
    }
}
//get all users
async function getAllusers() {
    try {
        const [rows] = await pool.query('SELECT * FROM users ')
        return rows
    } catch (error) {
        console.error('failed to get all users')
        throw error
    }
}
// get a user by id
async function getUserById(id) {
    try {
        const [row] = await pool.query('SELECT * FROM users WHERE UserID = ?', [id])
        return row
    } catch (error) {
        console.error('failed to get a user by id')
        throw error
    }
}
// update user info
async function updateUserInfo(data, id) {
    try {
        const { FirstName, LastName, Email, Password, PhoneNumber } = data
        const [row] = await pool.query('UPDATE users SET FirstName=?,LastName=?,Email=?,Password= ?,PhoneNumber=? WHERE UserID = ?', [FirstName, LastName, Email, Password, PhoneNumber, id])
        return row
    } catch (error) {
        console.error('')
        throw error
    }
}
// delete user
async function deleteUser(id) {
    try {
        const [row] = await pool.query('DELETE FROM users WHERE UserID = ?',[id])
        return row
    } catch (error) {
        console.error('')
        throw error
    }
}
module.exports = {
    createUser,
    getAllusers,
    getUserById,
    updateUserInfo,
    deleteUser
}