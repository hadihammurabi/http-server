const Server = require('..');
const server = new Server();

server.get('/', (req, res) => {
  res.send('hello');
});

server.listen(8080);
