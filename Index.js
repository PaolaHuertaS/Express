const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hola server');
  });

  const port = 3250;
  app.listen(port, () => {
    console.log(`Servidor Express`);
  });
 