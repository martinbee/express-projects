const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

// set static path (express.static === built in static middleware)
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(port, () => console.log(`Server started on port ${port}`));
