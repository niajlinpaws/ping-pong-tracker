import React from 'react';
import { Col, Layout, Row } from 'antd';

const { Content: ContentTag } = Layout;

const Content = ({ children }) => (
  <ContentTag style={{ margin: '60px 0', padding: 24 }}>
    <Row type="flex" justify="center">
      <Col
        xs={24}
        sm={24}
        md={18}
        lg={16}
        xl={16}
        xxl={16}
      >
        {children}
      </Col>
    </Row>
  </ContentTag>
);

export { Content };
