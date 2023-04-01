import { observer } from "mobx-react-lite";
import { Layout, Space } from "antd";
import ContentList from "../ListContent/ContentList";
import ListsStore from "../../store/listsStore";
import React, { useCallback, useEffect } from "react";
import { IItem } from "../../typings";
import { useDebounceCallback } from "../../hooks/debounce";
import inputTextSearch from "../../store/headerSearchStore";
import ErrorRequestStore from "../../store/errorRequestStore";
import { contentStyle } from "./SearchListsContentStyles";

const SearchListsContent: React.FC = observer(() => {
  const sendRequest = useDebounceCallback(async function requestOnChange() {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=$${inputTextSearch.inputText}`
      );

      if (response.status === 403) {
        ErrorRequestStore.changeErrorFast(true);
        setTimeout(() => {
          sendRequest();
        }, 15000);
      } else {
        ErrorRequestStore.changeErrorFast(false);
      }
      const data = await response.json();
      ListsStore.addSearchList(data.items);
    } catch (e) {
      ErrorRequestStore.changeErrorMessage((e as Error).message);
    }
  }, 500);

  const addInFeatureList = useCallback((item: IItem) => {
    ListsStore.addFeatureList(item);
  }, []);

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputTextSearch.inputText]);

  return (
    <Layout.Content style={contentStyle}>
      <Space align={"start"} size={100}>
        <ContentList
          addInFeaturedList={addInFeatureList}
          listRepositories={ListsStore.searchList}
          textHeaderList={"Список найденных репозиториев:"}
        />
        <ContentList
          listRepositories={ListsStore.featureList}
          textHeaderList={"Список избранных репозиториев:"}
        />
      </Space>
    </Layout.Content>
  );
});

export default SearchListsContent;
