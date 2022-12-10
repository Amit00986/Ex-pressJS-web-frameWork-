// const express = require("express");
import express from "express";

const router = express.Router();

router.get('/teacher/all', (req, res) => {
  res.send('All Teacher');
});

router.post('/teacher/create', (req, res) => {
  res.send('New teacher create');
});

router.put('/Teacher/update', (req, res) => {
  res.send('Teacher updated ');
});

router.delete('/teacher/delete', (req, res) => {
  res.send('Teacher deleted');
});

export default router;