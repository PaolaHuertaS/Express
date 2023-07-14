
const port = 3250;
app.listen(port, () => {
  console.log(`Servidor Express`);
});

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });