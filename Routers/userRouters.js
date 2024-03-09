const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const userModels = require('../Models/userModels')
dotenv.config();
const secret = process.env.TOKEN_SECRET

// get login :
router.get('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModels.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        // Generate JWT token
        const token = jwt.sign({ email: user.email, userId: user.id }, secret, { expiresIn: '1800s' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const data = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
            PhoneNumber: req.body.PhoneNumber
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
        const user = await userModels.updateUserInfo(data, id)
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