import { observer } from "mobx-react-lite";
import HeaderSearchStore from "../store/headerSearchStore";
import { Button } from "antd";
import React, { useCallback } from "react";
import clipboardCopy from "clipboard-copy";

const ButtonCopy: React.FC = observer(() => {
  const handleCopiedText = useCallback(() => {
    void clipboardCopy(HeaderSearchStore.inputText);
    HeaderSearchStore.changeLoadingCopy(true);
    setTimeout(() => {
      HeaderSearchStore.changeLoadingCopy(false);
    }, 5000);
  }, []);

  return HeaderSearchStore.loadingCopy ? (
    <Button type="primary" loading>
      Копируется
    </Button>
  ) : (
    <Button type="primary" onClick={handleCopiedText}>
      Скопировать
    </Button>
  );
});

export default ButtonCopy;
