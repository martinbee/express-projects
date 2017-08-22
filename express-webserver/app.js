const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  const html = '<h1>Hello World</h1>';

  res.send(html);
});

app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  const html = `<h1>Hello ${name}</h1>`;

  res.send(html);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
