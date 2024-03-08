const express = require('express')
const app = express()
const productRouter = require('./Routers/productsRouters')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<h1>Work</h1>')
})


// Products Routes : 
app.use('/products', productRouter)
app.use('/products/:id', productRouter)
app.use('/products/:category', productRouter)
app.use('/products', productRouter)












app.listen(3001)