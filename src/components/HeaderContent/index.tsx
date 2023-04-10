import { Input, Layout, Space, Button } from "antd";
import HeaderSearchStore from "../../store/headerSearchStore";
import { CloseOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import style from "./style.module.scss";
import ButtonCopy from "../ButtonCopy";
import errorRequestStore from "../../store/requestStore";

const HeaderContent: React.FC = observer(() => {
  const handleChangeInput = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      HeaderSearchStore.changeInputTextSearch(e.target.value);
    },
    []
  );

  const handleRequestCancellation = useCallback(() => {
    errorRequestStore.controllerCancelRequest.abort();
    setTimeout(() => errorRequestStore.updateController(), 1000);
  }, []);

  return (
    <Layout.Header className={style.header}>
      <Space>
        <Button onClick={handleRequestCancellation} icon={<CloseOutlined />} />
        <Input
          className={style.input}
          placeholder="Что ищем?"
          value={HeaderSearchStore.changeRequest}
          onChange={handleChangeInput}
        />
        <ButtonCopy />
      </Space>
    </Layout.Header>
  );
});

export default HeaderContent;
