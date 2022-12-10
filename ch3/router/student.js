// const express = require('express');
import express from "express";

const router = express.Router() 

router.get('/all',(req, res) => {
    res.send('All student')
})

router.post('/create', (req, res) => {
  res.send("new  student created");
});

router.put('/udate', (req, res) => {
  res.send("student update");
});

router.delete('/delete', (req, res) => {
  res.send("student delete");
});

//module.exports = router;
export default router