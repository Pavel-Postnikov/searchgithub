import { observer } from "mobx-react-lite";
import HeaderSearchStore from "../../store/headerSearchStore";
import { Button } from "antd";
import React, { useCallback, useState } from "react";
import clipboardCopy from "clipboard-copy";

const ButtonCopy: React.FC = observer(() => {
  const [loadingCopy, setLoadingCopy] = useState(false);
  const handleCopiedText = useCallback(async () => {
    await clipboardCopy(HeaderSearchStore.inputText);
    setLoadingCopy(true);
    setTimeout(() => {
      setLoadingCopy(false);
    }, 5000);
  }, []);

  return loadingCopy ? (
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
