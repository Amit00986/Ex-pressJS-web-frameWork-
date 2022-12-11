// route parameter

import express from "express";
const app = express();
const port = process.env.PORT || "3002";



// app.get('/student/delete/:id', (req, res) => {
//     console.log(req.params )
//     res.send(`student deleted ${req.params.id}`);
// })

// app.get('/product/:category/:id', (req, res) => {
//     console.log(req.params )
//     //res.send(`product category ${req.params.category} and productID: ${req.params.id}`);

//     const {category, id} = req.params
//     res.send(`Product Category: ${category} and Product ID: ${id}`)
// })

// app.get('/product/order/:year/and/:month', (req, res) => {
//     console.log(req.params )
//     //res.send(`product category ${req.params.category} and productID: ${req.params.id}`);
//     console.log(req.params)
//     const{year, month} = req.params
//     res.send(`year: ${year} and Month: ${month}`)
// })


// app.get('/train/:from-:to', (req, res) => {
//     console.log(req.params)
//     const {from, to } = req.params
//     res.send(`Travelling From: ${from} to: ${to}`) // object destructor
// })

// app.param('id', (req, res, next, id ) => {
//     console.log(`ID: ${id}`)
//     next()
// }) 

// app.get('/user/:id', (req, res) => {
//     console.log("This is user ID path")
//     res.send('Response Ok')
// })

//  app.get('/student/delete/:id([0-9]{2})', (req, res) => {
//     console.log(req.params )
//    res.send(`student deleted ${req.params.id}`);
//  })

// Query string
app.get('/product', (req, res) => {
    console.log(req.query);
    res.send(`Response ok ${req.query.category}`)
})


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});