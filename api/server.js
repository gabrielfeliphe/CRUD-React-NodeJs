require("dotenv").config();

const express = require('express')

const database = require('./userdb.js');

const app = express()

app.use(express.json()) 

var port = process.env.PORT || 5000

app.listen(port , () =>
  console.log(`Example app listening on port ${port}!`),
);

app.post('/InsertUser', async function(request, response){
 
  dbToken = await database.insertUser(request.body.email,request.body.senha,request.body.cep);
  response.status(200).json("funciona");
} )

app.post('/DeleteUser', async function(request, response){
 
  dbToken = await database.deleteUser(request.body.email);
  response.status(200).json("funciona");
} )

app.post('/UpdateUser', async function(request, response){
 
  dbToken = await database.updateUser(request.body.email,request.body.senha,request.body.cep);
  response.status(200).json("funciona");
} )

app.get('/GetUser', async function(request, response){
 
  dbToken = await database.getUser();
  console.log(dbToken)
  response.status(200).json(dbToken);
} )

