import { Button, Input, Layout, Space } from "antd";
import HeaderSearchStore from "../../store/headerSearchStore";
import React, { useCallback } from "react";
import clipboardCopy from "clipboard-copy";
import { observer } from "mobx-react-lite";
import { headerStyle } from "./HeaderContentStyles";
import ButtonCopy from "../ButtonCopy";

const HeaderContent: React.FC = observer(() => {
  const handleChangeInput = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      HeaderSearchStore.changeInputTextSearch(e.target.value);
    },
    []
  );

  return (
    <Layout.Header style={headerStyle}>
      <Space>
        <Input
          placeholder="Что ищем?"
          value={HeaderSearchStore.inputText}
          onChange={handleChangeInput}
          style={{ width: 300 }}
        />
        <ButtonCopy />
      </Space>
    </Layout.Header>
  );
});

export default HeaderContent;
