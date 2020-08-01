import { client } from './RESTAPIClient';

export const getPlayers = () => client({
  method: 'GET',
  url: '/players',
});

export const getPlayerMatchStatistics = (id) => client({
  method: 'GET',
  url: `/players/${id}/matches`,
});

export const addNewGame = (data) => client({
  method: 'POST',
  url: '/matches',
  data,
});
