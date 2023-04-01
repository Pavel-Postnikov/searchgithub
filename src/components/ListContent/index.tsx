import { IItem } from "../../typings";
import Index from "../ListItem";
import { List } from "antd";
import React from "react";
import { observer } from "mobx-react-lite";
import style from "./style.module.scss";
export interface IPropsContentList {
  onAddInElectedList?: (item: IItem) => void;
  listRepositories: IItem[];
  textHeaderList: string;
}

const ListContent: React.FC<IPropsContentList> = observer(
  ({ onAddInElectedList, listRepositories, textHeaderList }) => {
    return (
      <List
        className={style.list}
        header={<div>{textHeaderList}</div>}
        dataSource={listRepositories}
        renderItem={(item: IItem) => (
          <Index key={item.id} onClick={onAddInElectedList} item={item} />
        )}
      />
    );
  }
);

export default ListContent;
