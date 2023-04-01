import { Avatar, Card, Col, List, Row, Typography } from "antd";
import React, { memo, useCallback } from "react";
import { IItem } from "../../typings";

export interface IPropsItem {
  onClick?: (item: IItem) => void;
  item: IItem;
}

const ListItem: React.FC<IPropsItem> = memo(({ onClick, item }) => {
  const handleOnClick = useCallback(() => {
    onClick && onClick(item);
  }, [item, onClick]);

  return (
    <List.Item
      key={item.id}
      onClick={handleOnClick}
      style={{ textAlign: "center" }}
    >
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
      </Card>
    </List.Item>
  );
});

export default ListItem;
