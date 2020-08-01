const { Router } = require('express');
const { Match, Player } = require('../../models');
const { addNewMatch } = require('./ValidationRules');
const { validate } = require('../../utils/');

const router = Router();

/* POST match. */
router.post('/',
  validate(addNewMatch),
  async (req, res, next) => {
    const { statistics } = req.body;

    try {
      const players = await Player.find({
        _id: {
          $in: statistics.map(({ player }) => player),
        },
      });

      if (players.length === 2) {
        const playersBulkWriteQuery = statistics.map(({ player, status }) => {
          const {
            matchesPlayed,
            winPercentage,
          } = players.find((elem) => `${elem._id}` === player);
          const matchesWon = Math.round((matchesPlayed * winPercentage) / 100);
          const newMatchesPlayed = matchesPlayed + 1;
          const newWinPercentage = Math.round(
            ((matchesWon + (status === 'Won' ? 1 : 0)) / (newMatchesPlayed)) * 100,
          );

          return {
            updateOne: {
              filter: { _id: player },
              update: {
                matchesPlayed: newMatchesPlayed,
                winPercentage: newWinPercentage,
              },
            },
          };
        });

        await Match.create({ statistics });

        await Player.bulkWrite(playersBulkWriteQuery);

        res.status(200).json({
          message: 'Activity Successfull!',
          data: {},
        });
      } else {
        res.status(203).json({
          message: 'Players Not Found!',
          data: {},
        });
      }
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
