//const express = require('express');
import express from 'express'
const app = express();
const port = process.env.port||'8000';

// app.get('/', function(req, res){
//     res.send("hello world")
// })

app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);

})