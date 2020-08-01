import React from 'react';
import { Button, Table } from 'antd';

const PlayersListView = ({
  players,
  showModal,
}) => {
  const playerListColumns = [
    {
      title: 'Name',
      key: 'name',
      render: ({ name, _id }) => (
        <Button
          type="link"
          onClick={showModal({
            name: 'playerMatchStats',
            id: _id,
          })}
        >
          {name}
        </Button>
      ),
    },
    {
      title: 'Match Played',
      key: 'matchesPlayed',
      dataIndex: 'matchesPlayed',
    },
    {
      title: 'Won',
      key: 'created',
      render: ({ matchesPlayed, winPercentage }) => Math.round((matchesPlayed * winPercentage) / 100),
    },
    {
      title: 'Lost',
      key: 'updated',
      render: ({ matchesPlayed, winPercentage }) => Math.round((matchesPlayed * (100 - winPercentage)) / 100),
    },
    {
      title: 'Win %',
      key: 'winPercentage',
      dataIndex: 'winPercentage',
    },
    {
      title: 'Points',
      key: '_id',
      render: ({ matchesPlayed, winPercentage }) => Math.round((matchesPlayed * winPercentage) / 100) * 2,
    },
  ];

  return (
    <Table
      rowKey="_id"
      style={{
        backgroundColor: '#fff',
        boxShadow: '0px 0px 20px 5px rgba(128,128,128,0.2)',
      }}
      dataSource={players}
      columns={playerListColumns}
    />
  );
};

export { PlayersListView };
