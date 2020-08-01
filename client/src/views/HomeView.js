import React from 'react';
import { Layout, Modal } from 'antd';
import { Header, Content } from '../components';
import {
  AddNewGameView,
  MatchesListView,
  PlayersListView,
} from '.';

const HomeView = ({
  data: {
    game,
    players,
    matches,
    modal: {
      name: modalName,
      activePlayerId,
    },
  },
  showModal,
  handleCancel,
  handleSelectChange,
  handleOk,
  handleSubmit,
}) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header showModal={showModal} />
    <Content>
      <PlayersListView
        players={players}
        showModal={showModal}
      />
      <Modal
        title={modalName === 'playerMatchStats'
          ? 'Player Statistics' : 'Add New Game'}
        visible={!!modalName}
        onOk={handleOk}
        okText="Done"
        onCancel={handleCancel}
        cancelText="Go Back"
        destroyOnClose
      >
        {modalName === 'playerMatchStats' ? (
          <MatchesListView
            matches={matches}
            activePlayerId={activePlayerId}
          />
        ) : (
          <AddNewGameView
            game={game}
            players={players}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
          />
        )}
      </Modal>
    </Content>
  </Layout>
);

export { HomeView };
