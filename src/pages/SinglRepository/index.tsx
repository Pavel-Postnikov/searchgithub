import { Space, Card, Avatar, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import MoreInfoItemStore from "../../store/moreInfoItemStore";
import React from "react";
import style from "./style.module.scss";

const SingleRepository: React.FC = () => {
  const {
    moreInfoItem: {
      name,
      html_url,
      full_name,
      forks_count,
      id,
      description,
      homepage,
      language,
      stargazers_count,
      created_at,
      owner: { avatar_url },
    },
  } = MoreInfoItemStore;
  return (
    <Space className={style.space} direction="horizontal" size="middle">
      <Card
        className={style.card}
        title="Подробная информация репозитория"
        extra={<Link to={"/"}>Вернуться</Link>}
      >
        <Card.Meta
          avatar={
            <Avatar className={style.avatar} size={250} src={avatar_url} />
          }
          title={`Название репозитория: ${name}`}
          description={
            <>
              <Row>
                <Col>
                  <Typography.Text>Ссылка на репозиторий: </Typography.Text>
                  <Typography.Link href={html_url} target="_blank">
                    {full_name}
                  </Typography.Link>
                </Col>
              </Row>
              <Row>Число fork: {forks_count}</Row>
              <Row>Число star: {stargazers_count}</Row>
              <Row>
                <Typography.Text>
                  {`Дата создания:
                  ${new Date(Date.parse(created_at)).toLocaleDateString()}`}
                </Typography.Text>
              </Row>
            </>
          }
        />
        <p>
          <Typography.Text>ID репозитория: {id}</Typography.Text>
        </p>
        <p>
          <Typography.Text>Описание: {description}</Typography.Text>
        </p>
        <p>
          <Typography.Text>Ссылка на приложение: </Typography.Text>
          <Typography.Link href={homepage} target="_blank">
            {homepage}
          </Typography.Link>
        </p>
        <p>
          <Typography.Text>Используемый язык: {language}</Typography.Text>
        </p>
      </Card>
    </Space>
  );
};

export default SingleRepository;
