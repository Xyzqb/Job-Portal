//const express = require('express');

import express from "express";
import dotenv from 'dotenv'

dotenv.config({path:''})
const app = express();
app.get("/",(req,res) =>{
    res.send("<h1>Welcome to JOB PORTAL<h1>");
});
app.listen(8080,()=>{
    console.log("Noded Server Running on portal 8080");
});

