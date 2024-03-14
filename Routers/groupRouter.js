const express = require('express')
const router = express.Router()
const groupModel = require('../Models/groupModels')

// /allGroup
router.get('/allGroup', async (req, res) => {
    try {
        const groupes = await groupModel.getAllGroup()
        res.status(201).json(groupes)
    } catch (error) {
        console.log('', error)
    }
})
// /groupById:id
router.get('/groupById/:id', async (req, res) => {
    try {
        const id = req.params.id
        const group = await groupModel.getGroupByID(id)
        res.status(201).json(group)
    } catch (error) {
        console.log('', error)
    }
})
// createGroupe
router.post('/createGroupe', async (req, res) => {
    try {
        const data = {
            Name: req.body.Name,
            ImageURL: req.body.ImageURL,
            CategoryID: req.body.CategoryID
        }
        const group = await groupModel.addGroup(data)
        res.status(201).json(group)
    } catch (error) {
        console.log('', error)
    }
})
// updateGroupe/:id
router.put('/updateGroupe/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = {
            Name: req.body.Name,
            ImageURL: req.body.ImageURL,
            CategoryID: req.body.CategoryID
        }
        const group = await groupModel.updateGroup(data, id)
        res.status(201).json(group)
    } catch (error) {
        console.log('', error)
    }
})
// deleteGroup/:id
router.delete('/deleteGroup/:id', async (req, res) => {
    try {
        const id = req.params.id
        const group = await groupModel.deleteGroup(id)
        res.status(201).json(group)
    } catch (error) {
        console.log('', error)
    }
})


module.exports = router