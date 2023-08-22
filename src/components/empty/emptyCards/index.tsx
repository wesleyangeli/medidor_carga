import React from "react";
import { Button, Empty } from "antd";

const EmptyCards: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <span>Adicione madeiras para conferência no botão abaixo</span>
    }
  >
    <Button type="primary">Nova madeira</Button>
  </Empty>
);

export default EmptyCards;
