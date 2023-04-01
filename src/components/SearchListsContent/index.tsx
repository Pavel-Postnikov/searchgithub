import { observer } from "mobx-react-lite";
import { Layout, Space } from "antd";
import ListContent from "../ListContent";
import ListsStore from "../../store/listsStore";
import React, { useCallback, useEffect } from "react";
import { IItem } from "../../typings";
import { useDebounceCallback } from "../../hooks/debounce";
import inputTextSearch from "../../store/headerSearchStore";
import style from "./style.module.scss";
import SearchController from "../../controllers/SearchController";

const Index: React.FC = observer(() => {
  const sendRequest = useDebounceCallback(async function requestOnChange() {
    const data = await SearchController.getSearchList(
      inputTextSearch.inputText,
      sendRequest
    );
    ListsStore.addSearchList(data.items);
  }, 500);

  const handleAddInElectedList = useCallback((item: IItem) => {
    ListsStore.addElectedList(item);
  }, []);

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputTextSearch.inputText]);

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

export default Index;
