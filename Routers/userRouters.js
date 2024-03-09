const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const userModels = require('../Models/userModels')
dotenv.config();
process.env.TOKEN_SECRET;

// function generateAccessToken(username) {
//     return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }

router.post('/', async (req, res, next) => {
    try {
        const data = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
            PhoneNumbe: req.body.PhoneNumber
        }
        const user = await userModels.createUser(data)
        res.json(user)
    } catch (error) {
        next(error)
    }
})
router.get('/', async (req, res, next) => {
    try {
        const users = await userModels.getAllusers()
        res.json(users)
    } catch (error) {
        next(error)
    }
})
router.get('/id/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userModels.getUserById(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
})
router.put('/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
            PhoneNumbe: req.body.PhoneNumber
        }
        const user = await userModels.updateUserInfo(data,id)
        res.json(user)
    } catch (error) {
        next(error)
    }
})
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userModels.deleteUser(id)
        res.json(user)

    } catch (error) {
        next(error)
    }
})
module.exports = router