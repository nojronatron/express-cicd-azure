const express = require('express');
const app = express();

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('Ello Werld!');
});

app.post('/:id', (req, res) => {
  const { id } = req.params;
  const resultMsg = `Added ${id}`;
  res.json({ message: resultMsg });
});

module.exports = app;
