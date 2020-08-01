import React from 'react';
import {
  Button, Col, Layout, Row,
} from 'antd';

const { Header: Heading } = Layout;

const Header = ({ showModal }) => (
  <Heading style={{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '1rem',
  }}
  >
    <Row>
      <Col span={6}>Ping Pong</Col>
      <Col span={18}>
        <Row type="flex" justify="end" gutter={8}>
          <Col>
            <Button
              onClick={showModal({
                name: 'match',
              })}
              ghost
            >
Add New Game
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Heading>
);

export { Header };
