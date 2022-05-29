//var util= require('util');
//var encoder = new util.TextEncoder('utf-8');


const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kukukaia:<password>@cluster0.bodoj94.mongodb.net/?retryWrites=true&w=majority")

const Cat = mongoose.model('Cat', { name: String, color: String});
const kitty = new Cat({
    name: 'Dotty',
    color: 'black',
})

app.get('/',(req,res)=>{
    kitty.save().then(() => res.end('meOOw'));
    res.end('meoow')
})

app.listen(3008)
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://kukukaia:<password>@cluster0.bodoj94.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
})
*/