
const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors=require('cors');
//console.log('Hola');

///USuario userCarrascal
//Contraseña ZLKWUKNIBbpJm3hB
//StringConection n

//DESPLEGAR SERVIDOR

const server= express();

server.use((cors));

///Primera petición GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});

dbconection();
console.log(process.env)

server.listen(process.env.port,() => {
    console.log('El servidor se esta ejecutando en el puerto:'+process.env.port)
    console.log('Ginori Carrascal')
});