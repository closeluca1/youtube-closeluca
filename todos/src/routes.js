require('dotenv').config();
const route = require('express').Router();
const express = require('express');

route.get('/', (req,res)=> {
    res.json({
        message: 'Ola mundo! bem vindo ao canal @closeluca'
    });
});

module.exports = route;