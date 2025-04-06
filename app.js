const express = require('express'); // import express framework
const path = require('path'); // import the path in-built module
const ejs = require ('ejs'); // import the ejs module

//variable for express function
const app = express();

// Express's built-in middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application

//Directory for Express
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

function isProductInCart(cart, id){
    for(let i=0; i<cart.length; i++){
        if(cart[i].id == id){
            return true;
        }
    }
    return false
}

function calculateTotal(cart, req){
    total = 0;
    for(let i=0; i<cart.length; i++){
        total = 0;
        if(cart[i.sale_price]){
            total = total + (cart[i].sale_price+cart[i]*quantity);
        }else{
            total = total (cart[i].price*cart[i].quantity)
        }
    }
    req.session.total = total;
    return total;
}



app.get('/', (req, res) => {
    res.render('pages/index');
});


app.post('/addtocart', (req, res) => {

    if(req.session.cart){
        var cart = req.session.cart;

        if(!isProductInCart()){
            cart.push(product);
        }
    }else{
        req.session.cart = [product];
        const cart = req.session.cart;
    }

    //calculate total
    calculateTotal(cart,req)

    (res.redirect('/cart'));
});

app.get('/cart', (req, res) => {

    const cart = req.session.cart;
    const total = req.session.total;

    res.render('pages/cart', {cart:cart, total:toal});

});

app.post('/removeproduct', (req, res) => {
    const id = req.body.id;
    const cart = req.session.cart;

    for(let i=0; i<cart.length; i++){
        if(cart[1].id ==id){
            cart.splice(cart.indexOf(i),1);
        }
    }

    //re-calculate total
    calculateTotal(cart,req);
    res.redirect('/cart')
});

app.post('/editProductQuantity', (req, res) => {
    const cart = req.session.cart;

    if(increase_button){
        for(let i=0; i<cart.length; i++){
            if(cart[i].id == id){
                if(cart[i].quantity > 0){
                    cart[i].quantity = parseInt(cart[i].quantity)+1;
                }
            }
        }
    }

    if(decrease_button){
        for(let i=0; i<cart.length; i++){
            if(cart[i].id == id){
                if(cart[i].quantity > 0){
                    cart[i].quantity = parseInt(cart[i].quantity)-1;
                }
            }
        }
    }

    calculateTotal(cart,req);
    res.redirect('/cart')
});


app.get('/checkout', (req, res) => {
    const total = req.session.total
    res.render('pages/checkout', {total:total});
});

app.post('/placeorder', (req, res) => {

})

app.get('/payment', (req,res) => {
    res.render('pages/payment');
});g



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Craftly is running on port ${PORT}`);
});