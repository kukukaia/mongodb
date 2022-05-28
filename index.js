const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect("")

const Cat = mongoose.model('Cat', { name: String, color: String});

constr kitty = new Cat({
    name: 'Dotty',
    color: 'black',
});

app.get('/'),(req,res)=>{
    kitty.save().then(() => res.end('meOOw'));
}

app.listen(3000)