import { Space, Card, Avatar, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import MoreInfoItemStore from "../../store/moreInfoItemStore";
import React from "react";

const SingleRepository: React.FC = () => {
  return (
    <Space
      direction="horizontal"
      size="middle"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Card
        title="Подробная информация репозитория"
        extra={<Link to={"/"}>Вернуться</Link>}
        style={{ height: "90vh", width: "60vw" }}
      >
        <Card.Meta
          avatar={
            <Avatar
              size={250}
              src={`${MoreInfoItemStore.moreInfoItem.owner.avatar_url}`}
              style={{ marginRight: 20, marginBottom: 20 }}
            />
          }
          title={`Название репозитория: ${MoreInfoItemStore.moreInfoItem.name}`}
          description={
            <>
              <Row>
                <Col>
                  <Typography.Text>Ссылка на репозиторий: </Typography.Text>
                  <Typography.Link
                    href={`${MoreInfoItemStore.moreInfoItem.html_url}`}
                    target="_blank"
                  >
                    {MoreInfoItemStore.moreInfoItem.full_name}
                  </Typography.Link>
                </Col>
              </Row>
              <Row>
                Число fork: {MoreInfoItemStore.moreInfoItem.forks_count}
              </Row>
              <Row>
                Число star: {MoreInfoItemStore.moreInfoItem.stargazers_count}
              </Row>
              <Row>
                <Typography.Text>
                  {`Дата создания:
                  ${new Date(
                    Date.parse(MoreInfoItemStore.moreInfoItem.created_at)
                  ).toLocaleDateString()}`}
                </Typography.Text>
              </Row>
            </>
          }
        />
        <p>
          <Typography.Text>
            ID репозитория: {MoreInfoItemStore.moreInfoItem.id}
          </Typography.Text>
        </p>
        <p>
          <Typography.Text>
            Описание: {MoreInfoItemStore.moreInfoItem.description}
          </Typography.Text>
        </p>
        <p>
          <Typography.Text>Ссылка на приложение: </Typography.Text>
          <Typography.Link
            href={`${MoreInfoItemStore.moreInfoItem.homepage}`}
            target="_blank"
          >
            {MoreInfoItemStore.moreInfoItem.homepage}
          </Typography.Link>
        </p>
        <p>
          <Typography.Text>
            Используемый язык: {MoreInfoItemStore.moreInfoItem.language}
          </Typography.Text>
        </p>
      </Card>
    </Space>
  );
};

export default SingleRepository;
