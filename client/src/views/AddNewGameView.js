import React from 'react';
import {
  Button, Col, Form, Row, Select,
} from 'antd';
import { PlayerSelectCard } from '../components';

const { Option } = Select;

const AddNewGameView = ({
  game: {
    player1,
    player2,
  },
  players,
  handleSelectChange,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Row type="flex" justify="center">
      <Col span={12}>
        <PlayerSelectCard
          handleSelectChange={handleSelectChange('player1')}
          name={{
            inputNumber: 'player1Score',
            select: 'player1',
          }}
          option={players.reduce((players, { name, _id }) => {
            _id !== player2 && players.push(<Option key={_id} value={_id}>{name}</Option>);
            return players;
          }, [])}
          title="Player 1"
        />
      </Col>
      <Col span={12}>
        <PlayerSelectCard
          handleSelectChange={handleSelectChange('player2')}
          name={{
            inputNumber: 'player2Score',
            select: 'player2',
          }}
          option={players.reduce((players, { name, _id }) => {
            _id !== player1 && players.push(<Option key={_id} value={_id}>{name}</Option>);
            return players;
          }, [])}
          title="Player 2"
        />
      </Col>
    </Row>
    <Row type="flex" justify="center" style={{ margin: '10px', padding: '10px' }}>
      <Button type="primary" htmlType="submit">Add New Game</Button>
    </Row>
  </Form>
);

export { AddNewGameView };
