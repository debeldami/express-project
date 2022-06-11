const express = require('express');
const app = express();

const friends = [
  {
    id: 0,
    name: 'Albert Einsten',
  },
  {
    id: 1,
    name: 'Isaac Newton',
  },
  {
    id: 2,
    name: 'William Kumuyi',
  },
];

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: 'friend not found',
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}...`);
});
