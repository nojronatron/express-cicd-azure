const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3002;

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Ello Werld!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
