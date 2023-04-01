import { Avatar, Card, Col, List, Row, Typography, Button, Space } from "antd";
import React, { memo, useCallback } from "react";
import { IItem, IItemMoreInfo } from "../../typings";
import MoreInfoItemStore from "../../store/moreInfoItemStore";
import { useNavigate } from "react-router-dom";
export interface IPropsItem {
  onClick?: (item: IItem) => void;
  item: IItem;
}

const ListItem: React.FC<IPropsItem> = memo(({ onClick, item }) => {
  const navigate = useNavigate();

  const handleOnClickCard = useCallback(() => {
    onClick && onClick(item);
  }, [item, onClick]);

  const handleOnClickButton = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    MoreInfoItemStore.changeMoreInfoItem(item as IItemMoreInfo);
    navigate("/more");
  }, []);

  return (
    <List.Item key={item.id} onClick={handleOnClickCard}>
      <Card style={{ width: 400 }}>
        <Card.Meta
          avatar={<Avatar size={100} src={`${item.owner.avatar_url}`} />}
          title={`${item.name}`}
          description={
            <>
              <Row>
                <Col span={24}>
                  <Typography.Link href={`${item.html_url}`} target="_blank">
                    {item.full_name}
                  </Typography.Link>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }}>
                <Col span={12}>Fork: {item.forks_count}</Col>
                <Col span={12}>Star: {item.stargazers_count}</Col>
              </Row>
            </>
          }
        />
        <Space
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button type={"link"} onClick={handleOnClickButton}>
            Подробнее
          </Button>
        </Space>
      </Card>
    </List.Item>
  );
});

export default ListItem;
