import { IItem } from "../../typings";
import ListItem from "../ListItem/ListItem";
import { List } from "antd";
import React from "react";
import { observer } from "mobx-react-lite";

export interface IPropsContentList {
  addInFeaturedList?: (item: IItem) => void;
  listRepositories: IItem[];
  textHeaderList: string;
}

const ContentList: React.FC<IPropsContentList> = observer(
  ({ addInFeaturedList, listRepositories, textHeaderList }) => {
    return (
      <List
        header={<div>{textHeaderList}</div>}
        dataSource={listRepositories}
        renderItem={(item: IItem) => (
          <ListItem onClick={addInFeaturedList} item={item} />
        )}
        style={{ width: 400 }}
      />
    );
  }
);

export default ContentList;
