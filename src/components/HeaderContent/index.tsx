import { Input, Layout, Space } from "antd";
import HeaderSearchStore from "../../store/headerSearchStore";
import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import style from "./style.module.scss";
import ButtonCopy from "../ButtonCopy";

const HeaderContent: React.FC = observer(() => {
  const handleChangeInput = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      HeaderSearchStore.changeInputTextSearch(e.target.value);
    },
    []
  );

  return (
    <Layout.Header className={style.header}>
      <Space>
        <Input
          className={style.input}
          placeholder="Что ищем?"
          value={HeaderSearchStore.inputText}
          onChange={handleChangeInput}
        />
        <ButtonCopy />
      </Space>
    </Layout.Header>
  );
});

export default HeaderContent;
