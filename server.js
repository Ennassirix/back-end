const express = require('express')
const app = express()
const cors = require('cors')
const productRouter = require('./Routers/productsRouters')
const categoriesRouter = require('./Routers/categoryRouters')
const cartRouter = require('./Routers/cartRoutes')
const userRouter = require('./Routers/userRouters')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get('/', (req, res) => {
    res.send('<h1>Work</h1>')
})

// jwt : 


//

// Products Routes : 
app.use('/products', productRouter)
app.use('/products/:id', productRouter)
app.use('/products/:category', productRouter)
app.use('/products/sorted/order', productRouter)

// category Routes : 
app.use('/category', categoriesRouter)
app.use('/category/:id', categoriesRouter)
app.use('/category/sorted', categoriesRouter)

// cart Routes : 
app.use('/cart', cartRouter)
app.use('/cart/user/:id', cartRouter)

// user Routes : 
app.use('/user',userRouter) // get all users/delete a user : => 
app.use('/user/update/:id', userRouter) // => update : http://localhost:3001/user/update/2
app.use('/user/id/:id', userRouter) // => http://localhost:3001/user/id/1
app.use('/user/createUser', userRouter) // http://localhost:3001/user/createUser






app.listen(3001)