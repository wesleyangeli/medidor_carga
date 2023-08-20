import React from "react";
import { ObjectPropsI } from "@/utils/generateRandomObjects";
import { Button, Col, Input, InputNumber, Modal, Row } from "antd";
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";
// import { v4 as uuid4 } from "uuid";
import { getVolume } from "./actions";

interface CardItemProps {
  item: ObjectPropsI;
  alternateBackgroundColor: string;
}

const CardItem: React.FC<CardItemProps> = ({
  item,
  alternateBackgroundColor,
}) => {
  const { largura, espessura, comprimento, descricao, quantidade } = item;
  const [value, setValue] = React.useState<number>(quantidade);
  const [confirmResetVisible, setConfirmResetVisible] =
    React.useState<boolean>(false);

  const isDescricao = () => {
    if (typeof descricao === "string") {
      return descricao;
    } else {
      return null;
    }
  };

  const volume = getVolume({
    largura,
    espessura,
    comprimento,
    quantidade: value,
  });

  const handleResetConfirmed = () => {
    setValue(0);
    setConfirmResetVisible(false);
  };

  const handleResetCancel = () => {
    setConfirmResetVisible(false);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleResetClick = () => {
    setConfirmResetVisible(true);
  };

  const disableDecrement = () => {
    if (value === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Col xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
      <Row
        style={{
          backgroundColor: alternateBackgroundColor,
          border: "1px solid #f8f8f8",
          padding: "8px",
          boxShadow: "0 0 3px rgba(0,0,0,0.1)",
        }}
      >
        <Col span={22}>
          <Row style={{ color: "#000" }}>
            <Col span={6}>
              {largura} x {espessura}
            </Col>
            <Col span={18}>{isDescricao()}</Col>
            <Col span={24}>{comprimento} m</Col>
            <Col span={24}>
              <Button
                onClick={handleDecrement}
                size="large"
                disabled={disableDecrement()}
              >
                -1
              </Button>
              <InputNumber value={value} size="large" min={0}></InputNumber>
              <Button onClick={handleIncrement} size="large">
                +1
              </Button>
            </Col>
            <Col span={24}>Total: {volume} m³</Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <Button
                type="primary"
                ghost
                danger
                style={{ width: "100%" }}
                onClick={handleResetClick}
                icon={<UndoOutlined />}
                disabled={disableDecrement()}
              ></Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Confirmar reset"
        open={confirmResetVisible}
        onOk={handleResetConfirmed}
        onCancel={handleResetCancel}
      >
        <p>Tem certeza de que deseja resetar para zero?</p>
      </Modal>
    </Col>
  );
};

export default CardItem;
