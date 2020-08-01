import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { HomeView } from '../views';
import {
  addNewGame,
  getPlayers,
  getPlayerMatchStatistics,
} from '../apis';

const Home = () => {
  const initialState = {
    players: [],
    modal: {},
    matches: [],
    game: {},
  };

  const [state, setState] = useState(initialState);
  const {
    game, modal, players, matches,
  } = state;

  // populate players list
  useEffect(() => {
    const fetchData = async () => {
      const { data: { data: { players } } } = await getPlayers();
      setState((state) => ({
        ...state,
        players,
      }));
    };
    fetchData();
  }, []);

  const showModal = useCallback(({ name, id = null }) => async () => {
    if (name === 'playerMatchStats') {
      const { data: { data: { matches } } } = await getPlayerMatchStatistics(id);
      setState((state) => ({
        ...state,
        modal: {
          name,
          activePlayerId: id,
        },
        matches,
      }));
    } else {
      setState((state) => ({
        ...state,
        modal: {
          name,
        },
      }));
    }
  }, []);

  const handleCancel = useCallback(() => {
    setState((state) => ({
      ...state,
      modal: {},
      matches: [],
    }));
  }, []);

  const handleOk = useCallback(() => {
    setState((state) => ({
      ...state,
      modal: {},
      matches: [],
    }));
  }, []);

  const handleSelectChange = useCallback((player) => (playerId) => {
    setState((state) => ({
      ...state,
      game: {
        ...state.game,
        [player]: playerId,
      },
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const {
      player1Score: {
        value: player1Score,
      },
      player2Score: {
        value: player2Score,
      },
    } = e.target.elements;
    const { player1, player2 } = game;
    const player1Status = player1Score >= player2Score ? 'Won' : 'Lost';
    const player2Status = player2Score >= player1Score ? 'Won' : 'Lost';

    await addNewGame({
      statistics: [
        {
          player: player1,
          score: player1Score,
          status: player1Status,
        },
        {
          player: player2,
          score: player2Score,
          status: player2Status,
        },
      ],
    });

    const { data: { data: { players } } } = await getPlayers();

    setState((state) => ({
      ...state,
      modal: {},
      game: {},
      players,
    }));
  }, [game]);

  return useMemo(() => (
    <HomeView
      data={{
        game,
        matches,
        modal,
        players,
      }}
      showModal={showModal}
      handleCancel={handleCancel}
      handleOk={handleOk}
      handleSelectChange={handleSelectChange}
      handleSubmit={handleSubmit}
    />
  ), [
    game,
    handleCancel,
    handleOk,
    handleSelectChange,
    handleSubmit,
    matches,
    modal,
    players,
    showModal,
  ]);
};

export { Home };
