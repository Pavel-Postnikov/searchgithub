import { Button, Input, Layout, Space } from "antd";
import HeaderSearchStore from "../../store/headerSearchStore";
import React, { useCallback } from "react";
import clipboardCopy from "clipboard-copy";
import { observer } from "mobx-react-lite";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const HeaderContent: React.FC = observer(() => {
  const changeInput = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      HeaderSearchStore.changeInputTextSearch(e.target.value);
    },
    []
  );

  const copyText = useCallback(() => {
    void clipboardCopy(HeaderSearchStore.inputText);
    HeaderSearchStore.changeLoadingCopy(true);
    setTimeout(() => {
      HeaderSearchStore.changeLoadingCopy(false);
    }, 5000);
  }, []);

  return (
    <Layout.Header style={headerStyle}>
      <Space>
        <Input
          placeholder="Что ищем?"
          value={HeaderSearchStore.inputText}
          onChange={changeInput}
          style={{ width: 300 }}
        />
        {HeaderSearchStore.loadingCopy ? (
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
  );
});

export default HeaderContent;
