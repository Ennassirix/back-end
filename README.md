# back-end

# user API's
to get all users => http://localhost:3001/user
to detele => http://localhost:3001/user/${id}
to update => http://localhost:3001/user/update/${id}
to get user by id => http://localhost:3001/user/id/${id}
to create a user => http://localhost:3001/user/createUser
for log in => http://localhost:3001/user/login

# Products API's
create a product => http://localhost:3001/Products //data in the body
get all products => http://localhost:3001/Products
get Product by id => http://localhost:3001/Products/${id}
get Product by category => http://localhost:3001/Products/category/${category}
get product Sorted => http://localhost:3001/products/sorted/order?sort=${sort}&order=${order}
update a product =>http://localhost:3001/Products/${id} //data in the body
delete a product => http://localhost:3001/Products/${id}

# Category API's
get all categories => http://localhost:3001/category
get a category by id => http://localhost:3001/category/${id}
get category sorted => http://localhost:3001/category/sorted/order?order=${order} 'ASC or DESC'
create a category => http://localhost:3001/category //data in the body
to delete a category => http://localhost:3001/category/${id}
to update a category => http://localhost:3001/category/${id} //data in the body

# Cart API's
get the user cart => http://localhost:3001/cart/${userID}
delete from cart by productID and userID => http://localhost:3001/cart/${productID}/${userID}
add to the cart => http://localhost:3001/cart
