const express = require('express');
const app = express();
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

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

app.get('/friends', friendsController.getFriends);
app.get('/friends/:id', friendsController.getFriend);
app.post('/friends', friendsController.postFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}...`);
});
