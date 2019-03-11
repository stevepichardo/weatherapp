const express = require('express');
const app = express();
const rp = require('request-promise');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  var options = {
    uri: 'https://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: 'new york',
      APPID: '15aa7326e54d887f0365f62a4ef96a3a'
    }
  };

  rp(options).then(data => {
    const weather = JSON.parse(data);
    res.render('test', {
      temperature: weather.main.temp,
      city: weather.name,
      weatherDesc: weather.weather[0].description
    });
  });
});

app.listen(3000, () => {
  console.log(`listening to port 3000`);
});

app.get('/test', (req, res) => {
  res.render('test');
});
