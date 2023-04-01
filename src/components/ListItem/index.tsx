import { Avatar, Card, Col, List, Row, Typography, Button, Space } from "antd";
import React, { memo, useCallback } from "react";
import { IItem, IItemMoreInfo } from "../../typings";
import MoreInfoItemStore from "../../store/moreInfoItemStore";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export interface IPropsItem {
  onClick?: (item: IItem) => void;
  item: IItem;
}

const Index: React.FC<IPropsItem> = memo(({ onClick, item }) => {
  const navigate = useNavigate();

  const handleOnClickCard = useCallback(() => {
    onClick && onClick(item);
  }, [item, onClick]);

  const handleOnClickButton = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();

      MoreInfoItemStore.changeMoreInfoItem(item as IItemMoreInfo);
      navigate("/more");
    },
    [item, navigate]
  );

  const renderDescription = () => {
    return (
      <>
        <Row>
          <Col span={24}>
            <Typography.Link href={item.html_url} target="_blank">
              {item.full_name}
            </Typography.Link>
          </Col>
        </Row>
        <Row className={style.row}>
          <Col span={12}>Fork: {item.forks_count}</Col>
          <Col span={12}>Star: {item.stargazers_count}</Col>
        </Row>
      </>
    );
  };

  return (
    <List.Item onClick={handleOnClickCard}>
      <Card className={style.card} style={{}}>
        <Card.Meta
          avatar={<Avatar size={100} src={item.owner.avatar_url} />}
          title={item.name}
          description={renderDescription()}
        />
        <Space className={style.space}>
          <Button type={"link"} onClick={handleOnClickButton}>
            Подробнее
          </Button>
        </Space>
      </Card>
    </List.Item>
  );
});

export default Index;
