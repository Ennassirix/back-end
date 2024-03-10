const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productRouter = require('./Routers/productsRouters')
const categoriesRouter = require('./Routers/categoryRouters')
const cartRouter = require('./Routers/cartRoutes')
const userRouter = require('./Routers/userRouters')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))


app.use(cookieParser());

app.get('/', function (req, res) {
    res.json({ meassage  : 'working'})

});



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
app.use('/user', userRouter) // get all users/delete a user : => 







app.listen(3001)