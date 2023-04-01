import React, { memo, useCallback, useEffect, useState } from "react";
import { IItem } from "../../typings";
import { useDebounceCallback } from "../../hooks/debounce";
import clipboardCopy from "clipboard-copy";
import { Button, Input, Layout, Space, Typography } from "antd";
import ContentList from "../../components/ContentList/ContentList";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: 10,
  color: "#fff",
  backgroundColor: "white",
};

const SearchGitHub: React.FC = memo(() => {
  const [inputText, setInputText] = useState<string>("");

  const [searchList, setSearchList] = useState<IItem[]>([]);
  const [featuredList, setFeaturedList] = useState<IItem[]>([]);

  const [copiedButton, setCopiedButton] = useState(false);
  const [errorFastRequest, setErrorFastRequest] = useState(false);
  const [errorMessageRequest, setErrorMessageRequest] = useState("");

  const changeInput = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );

  const test = useDebounceCallback(async function requestOnChange() {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=$${inputText}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status > 400) {
        setErrorFastRequest(true);
        setTimeout(() => {
          test();
        }, 15000);
      } else {
        setErrorFastRequest(false);
      }
      const data = await response.json();
      setSearchList(data.items);
    } catch (e) {
      setErrorMessageRequest((e as Error).message);
    }
  }, 500);

  useEffect(() => {
    test();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  const addInFeaturedList = useCallback((item: IItem) => {
    setFeaturedList((prevState) => {
      if (!prevState.includes(item)) {
        prevState = prevState.concat(item);
      }
      return prevState;
    });
  }, []);

  const copyText = useCallback(() => {
    void clipboardCopy(inputText);
    setCopiedButton(true);
    setTimeout(() => {
      setCopiedButton(false);
    }, 5000);
  }, [inputText]);

  return (
    <Layout>
      <Layout.Header style={headerStyle}>
        <Space>
          <Input
            placeholder="Что ищем?"
            value={inputText}
            onChange={changeInput}
            style={{ width: 300 }}
          />
          {copiedButton ? (
            <Button type="primary" loading>
              Копируется
            </Button>
          ) : (
            <Button type="primary" onClick={copyText}>
              Скопировать
            </Button>
          )}
        </Space>
      </Layout.Header>

      {errorFastRequest ? (
        <Typography.Text type="danger" style={{ textAlign: "center" }}>
          {errorMessageRequest
            ? errorMessageRequest
            : "Слишком частые запросы (немного подождите)"}
        </Typography.Text>
      ) : null}
      <Layout.Content style={contentStyle}>
        <Space align={"start"} size={100}>
          <ContentList
            addInFeaturedList={addInFeaturedList}
            listRepositories={searchList}
            textHeaderList={"Список найденных репозиториев:"}
          />
          <ContentList
            listRepositories={featuredList}
            textHeaderList={"Список избранных репозиториев:"}
          />
        </Space>
      </Layout.Content>
    </Layout>
  );
});

export default SearchGitHub;
