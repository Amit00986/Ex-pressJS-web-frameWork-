// Routing
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';

//Route

// app.get('/', (req, res) => {
//     res.send("get method");
// })

// app.all('/sabkuch', (req, res) => {
//     res.send("All Method");
// })

// app.all('*', (req, res) => {
//     res.send('Page Not found !!');
// })

// string path 
// app.get("/ab?cd", (req, res) => {
//   res.send("About Page");
// });

// Regular Expression
// app.get(/a/, (req, res) => {
//   res.send("This is A");
// });

// one call back
// app.get('/cbexample1', (req, res) => {
//    res.send("one callback Example");
//  });

//more than one call back
//  app.get("/cbexample2", (req, res, next) => {
//    console.log('first call back');
//    next();
//  }, (req, res ) => {
//     console.log('more than 2nd call back');
//      res.send("more than one callback Example");
//  });

//An array of call back
const cb1 = (req, res, next) => {
    console.log('First call back ')
    next();
}
const cb2 = (req, res, next) => {
    console.log('Second callback')
    next();
}
const cb3 = (req, res) => {
    console.log('Third callback ')
    res.send('An array of Callback Example');
}
 app.get('/cbexample3',[cb1, cb2, cb3])

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})
