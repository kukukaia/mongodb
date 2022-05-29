const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kukukaia:<password>@cluster0.bodoj94.mongodb.net/?retryWrites=true&w=majority")

const Cat = mongoose.model('Cat', { name: String, color: String});
const kitty = new Cat({
    name: 'Dotty',
    color: 'black',
});

app.get('/',(req,res)=>{
    kitty.save().then(() => res.end('meOOw'));
    res.end('meoow')
})

app.listen(3000)