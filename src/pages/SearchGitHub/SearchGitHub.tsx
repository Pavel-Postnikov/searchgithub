import React, { useCallback, useEffect } from "react";
import { IItem } from "../../typings";
import { useDebounceCallback } from "../../hooks/debounce";
import { Layout, Space } from "antd";
import ContentList from "../../components/ListContent/ContentList";
import inputTextSearch from "../../store/headerSearchStore";
import { observer } from "mobx-react-lite";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import ErrorRequestContent from "../../components/ErrorRequestContent/ErrorRequestContent";
import ErrorRequestStore from "../../store/errorRequestStore";
import ListsStore from "../../store/listsStore";
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: 10,
  color: "#fff",
  backgroundColor: "white",
};

const SearchGitHub: React.FC = observer(() => {
  const sendRequest = useDebounceCallback(async function requestOnChange() {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=$${inputTextSearch.inputText}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputTextSearch.inputText]);

  const addInFeaturedList = useCallback((item: IItem) => {
    ListsStore.addFeatureList(item);
  }, []);

  return (
    <Layout>
      <HeaderContent />
      <ErrorRequestContent />
      <Layout.Content style={contentStyle}>
        <Space align={"start"} size={100}>
          <ContentList
            addInFeaturedList={addInFeaturedList}
            listRepositories={ListsStore.searchList}
            textHeaderList={"Список найденных репозиториев:"}
          />
          <ContentList
            listRepositories={ListsStore.featureList}
            textHeaderList={"Список избранных репозиториев:"}
          />
        </Space>
      </Layout.Content>
    </Layout>
  );
});

export default SearchGitHub;
