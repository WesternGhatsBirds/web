const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
mongoose.connect("mongodb://mongo:27017");
const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.get('/openingMessage', function(req, res){
  let cats = Cat.find(function (err, cats) {
    if (err) return console.error(err);
    console.log(cats);
    res.send(cats[0].name);
  });
});

app.listen(3001, function(){
  console.log('Example app listening on port 3001!');
});