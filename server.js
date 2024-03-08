const express = require('express')
const app = express()
const productRouter = require('./Routers/productsRouters')
const categoriesRouter = require('./Routers/categoryRouters')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<h1>Work</h1>')
})


// Products Routes : 
app.use('/products', productRouter)
app.use('/products/:id', productRouter)
app.use('/products/:category', productRouter)
app.use('/products/sorted/order', productRouter)

// category Routes : 
app.use('/category', categoriesRouter)
app.use('/category/:id', categoriesRouter)
app.use('/category/sorted', categoriesRouter)











app.listen(3001)