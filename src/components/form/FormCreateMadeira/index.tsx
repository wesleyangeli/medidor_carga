import {
  Button,
  Col,
  Drawer,
  Form,
  InputNumber,
  Row,
  Space,
  Input,
} from "antd";
import React, { Dispatch, SetStateAction } from "react";

interface FormCreateMadeiraPropsI {
  isOpenCreateMadeira: boolean;
  setIsOpenCreateMadeira: Dispatch<SetStateAction<boolean>>;
}

function FormCreateMadeira({
  isOpenCreateMadeira,
  setIsOpenCreateMadeira,
}: FormCreateMadeiraPropsI) {
  const [form] = Form.useForm();

  const onClose = () => {
    setIsOpenCreateMadeira(false);
  };

  return (
    <Drawer
      title={`Nova madeira`}
      placement="right"
      onClose={onClose}
      open={isOpenCreateMadeira}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="primary" onClick={onClose}>
            Cadastrar
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name={"descricao"} label="Descrição">
              <Input placeholder="Descrição" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="largura"
              label="Largura"
              rules={[{ required: true, message: "Este campo é obrigatório" }]}
            >
              <InputNumber placeholder="cm" type="number" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="espessura"
              label="Espessura"
              rules={[{ required: true, message: "Este campo é obrigatório" }]}
            >
              <InputNumber placeholder="cm" type="number" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="comprimento"
              label="Comprimento"
              rules={[{ required: true, message: "Este campo é obrigatório" }]}
            >
              <InputNumber placeholder="cm" type="number" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default FormCreateMadeira;
