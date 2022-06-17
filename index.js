const express = require('express');
const app = express();

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

app.use((req, res, next) => {
  const start = Date.now();

  next();

  const delta = Date.now() - start;

  console.log(console.log(`${req.method} ... ${req.url} ... ${delta}ms`));
});

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}...`);
});
