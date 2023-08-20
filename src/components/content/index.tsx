import React from "react";
import { Col, Layout, Row, Space } from "antd";
import { cardProps } from "./props";

const { Content } = Layout;

interface ContentProps {
  children: React.ReactNode;
}

const ContentApp: React.FC<ContentProps> = ({ children }) => {
  return (
    <Content>
      <Row gutter={[16, 16]} align={"middle"} justify={"center"}>
        <Col {...cardProps}>
          <Space size="middle" style={{ padding: "8px 8px" }}>
            {children}
          </Space>
        </Col>
      </Row>
    </Content>
  );
};

export default ContentApp;
