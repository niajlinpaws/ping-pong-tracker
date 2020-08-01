const { Player } = require('../models');

const seedPlayers = async () => {
  const players = [
    {
      name: 'Tony Stark',
    },
    {
      name: 'Natalia Romanova',
    },
    {
      name: 'Steve Rogers',
    },
  ];

  try {
    await Player.collection.drop();
    await Player.create(players);
    console.log('Seeding players completed!');
  } catch (e) {
    console.log(`Error occured while seeding players:\n${e.message}`);
  }
};

module.exports = seedPlayers;
