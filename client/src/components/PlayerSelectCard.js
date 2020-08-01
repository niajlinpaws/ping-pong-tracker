import React from 'react';
import {
  Card, InputNumber, Row, Select,
} from 'antd';

const PlayerSelectCard = ({
  handleSelectChange,
  name: {
    select,
    inputNumber,
  },
  option,
  title,
}) => (
  <Card>
    <Row type="flex" justify="center">
      <Row>{title}</Row>
      <Row style={{ margin: '20px', padding: '20px' }}>
        <Select
          showSearch
          style={{ width: 200 }}
          name={select}
          placeholder="Select a player"
          optionFilterProp="children"
          onChange={handleSelectChange}
        >
          {option}
        </Select>
      </Row>
      <Row>
        <InputNumber
          size="large"
          min={0}
          max={5}
          name={inputNumber}
          placeholder="Score"
          required
        />
      </Row>
    </Row>
  </Card>
);

export { PlayerSelectCard };
