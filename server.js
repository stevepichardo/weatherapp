const express = require('express');
const helper = require('./public/js/helpers');
const app = express();
const rp = require('request-promise');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  var options = {
    uri: 'https://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: 'lakeland',
      APPID: '15aa7326e54d887f0365f62a4ef96a3a'
    }
  };

  rp(options).then(data => {
    const weather = JSON.parse(data);
    const fahrenheit = helper.conversionFahrenheit(weather.main.temp);
    const now = helper.getCurrentTime();

    // Change background img
    res.render('test', {
      temperature: fahrenheit,
      city: weather.name,
      weatherDesc: weather.weather[0].description,
      time: now
    });
  });
});

app.listen(3000, () => {
  console.log(`listening to port 3000`);
});

app.get('/test', (req, res) => {
  res.render('test');
});
