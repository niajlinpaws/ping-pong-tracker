import React from 'react';
import { Table, Tag } from 'antd';

const MatchesListView = ({
  matches,
  activePlayerId,
}) => {
  const matchListColumns = [
    {
      title: 'Player 1',
      key: '_id',
      render: ({ statistics }) => statistics.reduce((player, current) => {
        const { player: { _id, name }, score } = current;
        _id === activePlayerId && player.push(`${name} (${score})`);
        return player;
      }, []),
    },
    {
      title: 'Player 2',
      key: 'created',
      render: ({ statistics }) => statistics.reduce((player, current) => {
        const { player: { _id, name }, score } = current;
        _id !== activePlayerId && player.push(`${name} (${score})`);
        return player;
      }, []),
    },
    {
      title: 'Status',
      key: 'updated',
      render: ({ statistics }) => {
        const { status } = statistics.find(({
          player: { _id },
        }) => _id === activePlayerId);

        return (<Tag color={status === 'Won' ? 'green' : 'red'}>{status}</Tag>);
      },
    },
  ];

  return (
    <Table
      rowKey="_id"
      dataSource={matches}
      columns={matchListColumns}
    />
  );
};

export { MatchesListView };
