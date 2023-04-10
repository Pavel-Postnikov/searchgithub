import { observer } from "mobx-react-lite";
import { Layout, Space } from "antd";
import ListContent from "../ListContent";
import ListsStore from "../../store/listsStore";
import React, { useCallback } from "react";
import { IItem } from "../../typings";
import style from "./style.module.scss";

const SearchListsContent: React.FC = observer(() => {
  const handleAddInElectedList = useCallback((item: IItem) => {
    ListsStore.addElectedList(item);
  }, []);

  return (
    <Layout.Content className={style.row}>
      <Space align={"start"} size={100}>
        <ListContent
          onAddInElectedList={handleAddInElectedList}
          listRepositories={ListsStore.searchList}
          textHeaderList={"Список найденных репозиториев:"}
        />
        <ListContent
          listRepositories={ListsStore.electedList}
          textHeaderList={"Список избранных репозиториев:"}
        />
      </Space>
    </Layout.Content>
  );
});

export default SearchListsContent;
