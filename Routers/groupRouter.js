const express = require('express')
const router = express.Router()
const groupModel = require('../Models/groupModels')
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra')

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

// => abderezake : C:\\Users\\bouka\\OneDrive\\Bureau\\Projet Fin D\'etude\\front-end\\public\\images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:\\Users\\Ayoub\\Desktop\\React\\book_r\\public\\images'); // Set the destination folder for uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Set the filename for uploaded images
    }
});
// Initialize multer with storage configuration
const upload = multer({ storage: storage });

// Handle POST request to '/createGroupe' endpoint
router.post('/createGroupe', upload.single('image'), async (req, res, next) => {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        // Extract data from request body
        const { Name, CategoryID } = req.body;
        // Construct data object
        const data = {
            Name,
            ImageURL: req.file.filename, // Use filename instead of path
            CategoryID
        };
        // Add group to database
        const group = await groupModel.addGroup(data);
        res.json(group); // Send response with added group data
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal server error' }); // Send internal server error response
    }
});

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