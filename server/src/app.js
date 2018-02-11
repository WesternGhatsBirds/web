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
    data: [
      {
        lat: [12.976135, 13.976135],
        lon: [77.592775, 78.592775],
        text: ['First', 'Second'],
        type: 'scattergeo',
        mode: 'markers+text',
        name: 'Points'
      }
    ],
    layout: {
      title: 'Birds of the Western Ghats',
      autosize: true,
      width: 1000,
      height: 800,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90
      },
      geo: {
        scope: 'india',
        resolution: 50,
        lataxis: {
          'range': [0, 30]
        },
        lonaxis: {
          'range': [50, 100]
        },
        showrivers: true,
        rivercolor: '#fff',
        showlakes: true,
        lakecolor: '#fff',
        showland: true,
        landcolor: '#EAEAAE',
        countrycolor: '#d3d3d3',
        countrywidth: 1.5,
        subunitcolor: '#d3d3d3'
      }
    }
  })
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});