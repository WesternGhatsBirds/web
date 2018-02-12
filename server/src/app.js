const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
mongoose.connect("mongodb://mongo:27017");
const Cat = mongoose.model('Cat', {name: String});
// const GeoMap = mongoose.model('GeoMap', { name: String, data: });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.get('/openingMessage', function (req, res) {
  let cats = Cat.find(function (err, cats) {
    if (err) return console.error(err);
    console.log(cats);
    res.send(cats[0].name);
  });
});

app.get('/map/data', function (req, res) {
  res.send({
    points: [
      {
        lat: 12.976135,
        lon: 77.592775,
        tag: "First"
      },
      {
        lat: 13.976135,
        lon: 78.592775,
        tag: "Second"
      }
    ]
  })
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});