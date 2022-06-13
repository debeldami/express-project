const friends = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'missing friends name',
    });
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };

  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const id = Number(req.params.id);
  const friend = friends[id];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: 'friend not found',
    });
  }
}

module.exports = {
  getFriends,
  postFriend,
  getFriend,
};
