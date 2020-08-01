const { Router } = require('express');
const { Match, Player } = require('../../models');

const router = Router();

/* GET players list. */
router.get('/', async (req, res, next) => {
  try {
    const players = await Player.find({}, { _v: 0 }, {
      sort: {
        winPercentage: -1,
      },
    });

    res.status(200).json({
      message: 'Activity Successfull!',
      data: {
        count: players.length,
        players,
      },
    });
  } catch (e) {
    next(e);
  }
});

/* GET player matches list. */
router.get('/:id/matches', async (req, res, next) => {
  const { id } = req.params;
  try {
    const matches = await Match.find({ 'statistics.player': id }, { _v: 0 }, {
      sort: {
        createdAt: -1,
      },
    }).populate('statistics.player');

    res.status(200).json({
      message: 'Activity Successfull!',
      data: {
        count: matches.length,
        matches,
      },
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
