const express = require('express'); // import express framework
const session = require("express-session"); 
const cors = require("cors"); // This because we are connecting React (Frontend) and Express (Backend) from diff ports.
const path = require('path'); // import the path in-built module
const CartRoutes = require('./routes/cartRoutes'); // this imports the routes

// const ejs = require ('ejs'); // import the ejs module

//variable for express function
const app = express();

// Express's built-in middleware
app.use(cors({origin: 'http://localhost:3000', credentials: true})) // This allows request from the front end. 
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application

app.use(session({ // This helps t manage the sessiosn like carts,users, login etc.
    secret: `craftly-secret`, // Note this is a random secret key for the session. 
    resave: false,
    saveUninitialized: true,
}))

app.use('/api', CartRoutes); // This shows all car routes will have to get the prefix with /api

//Directory for Express
// app.use(express.static(path.join(__dirname, 'public'))); // This serves the frontend 
// app.set('view engine', 'ejs');

// function isProductInCart(cart, id){
//     return cart.some(item => item.id === id)
//     // for(let i=0; i<cart.length; i++){
//     //     if(cart[i].id == id){
//     //         return true;
//     //     }
//     // }
//     // return false
// }



// function calculateTotal(cart, req){
//    let  total = 0;
//     for(let i=0; i<cart.length; i++){
//         total = 0;
//         if(cart[i.sale_price]){
//             total = total + (cart[i].sale_price+cart[i]*quantity);
//         }else{
//             total = total (cart[i].price*cart[i].quantity)
//         }
//     }
//     req.session.total = total;
//     return total;
// }



// The Route 

// app.get('/', (req, res) => {
//     res.render('pages/index');
// });






// app.post('/api/placeorder', (req,res) => {
//     req.session.cart = [];
//     req.session.total = 0;
//     res.json({message: 'Order placed successuflly'});
// });


// app.post('/api/addtocart', (req, res) => {

//     const product = req.body.product;

//     if(req.session.cart){
//         var cart = req.session.cart;

//         if(!isProductInCart()){
//             cart.push(product);
//         }
//     }else{
//         req.session.cart = [product];
//         const cart = req.session.cart;
//     }

//     //calculate total
//     calculateTotal(cart,req)

//     (res.redirect('/cart'));
// });


// app.get('/cart', (req, res) => {

//     const cart = req.session.cart;
//     const total = req.session.total;

//     res.render('pages/cart', {cart:cart, total:toal});

// });

// app.post('/removeproduct', (req, res) => {
//     const id = req.body.id;
//     const cart = req.session.cart;

//     for(let i=0; i<cart.length; i++){
//         if(cart[1].id ==id){
//             cart.splice(cart.indexOf(i),1);
//         }
//     }

//     //re-calculate total
//     calculateTotal(cart,req);
//     res.redirect('/cart')
// });

// app.post('/editProductQuantity', (req, res) => {
//     const cart = req.session.cart;

//     if(increase_button){
//         for(let i=0; i<cart.length; i++){
//             if(cart[i].id == id){
//                 if(cart[i].quantity > 0){
//                     cart[i].quantity = parseInt(cart[i].quantity)+1;
//                 }
//             }
//         }
//     }

//     if(decrease_button){
//         for(let i=0; i<cart.length; i++){
//             if(cart[i].id == id){
//                 if(cart[i].quantity > 0){
//                     cart[i].quantity = parseInt(cart[i].quantity)-1;
//                 }
//             }
//         }
//     }

//     calculateTotal(cart,req);
//     res.redirect('/cart')
// });


// app.get('/checkout', (req, res) => {
//     const total = req.session.total
//     res.render('pages/checkout', {total:total});
// });

// app.post('/placeorder', (req, res) => {

// })

// app.get('/payment', (req,res) => {
//     res.render('pages/payment');
// });g



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Craftly is running on port ${PORT}`);
});