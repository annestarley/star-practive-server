const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.port || 6001;

app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(cors({ origin: '*'}));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/avgRating', (req, res) => {
  res.send('2.5')
});

app.get('/containerPercentage', (req, res) => {
  res.send('50')
});

app.get('/numOfRatings', (req, res) => {
  res.send('27')
});

app.listen(port, () => {
  console.debug(`Star Rating Server listening on port ${port}`)
});
