const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
});

app.listen(port, () => console.log(`example listening on port ${port}`));