import React from "react";
import { Layout, Row, Col, Button } from "antd";
import { v4 as uuid4 } from "uuid";
import CardItem from "@/components/itemCard";
import ContentApp from "../components/content";
import { arrayRegisters } from "./mock";
import FormCreateMadeira from "@/components/form/FormCreateMadeira";

const { Header, Footer } = Layout;

const Home: React.FC = () => {
  const [arrayOfObjects, setArrayOfObjects] = React.useState(arrayRegisters);
  const [isOpenCreateMadeira, setIsOpenCreateMadeira] = React.useState(false);

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button onClick={() => setIsOpenCreateMadeira(true)}>
            Novo produto
          </Button>
        </Header>
        <ContentApp>
          <Row gutter={[8, 8]} style={{ padding: "16px 8px" }}>
            {arrayOfObjects.map((item, index) => {
              const alternateBackgroundColor =
                index % 2 === 0 ? "#FEFEFE" : "#EEE";
              return (
                <CardItem
                  item={item}
                  alternateBackgroundColor={alternateBackgroundColor}
                  key={uuid4()}
                />
              );
            })}
          </Row>
        </ContentApp>
        <Footer style={{ textAlign: "center" }}>
          wesleyangeli ©2023 Created by Ant Wesley Angeli
        </Footer>
      </Layout>
      <FormCreateMadeira
        isOpenCreateMadeira={isOpenCreateMadeira}
        setIsOpenCreateMadeira={setIsOpenCreateMadeira}
      />
    </>
  );
};

export default Home;
