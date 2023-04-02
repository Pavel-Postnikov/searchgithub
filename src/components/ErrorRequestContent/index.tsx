import { observer } from "mobx-react-lite";
import ErrorRequestStore from "../../store/requestStore";
import { Typography } from "antd";
import React from "react";
import style from "./style.module.scss";

const ErrorRequestContent: React.FC = observer(() => {
  return ErrorRequestStore.hasErrorFast ? (
    <Typography.Text type="danger" className={style.text}>
      {ErrorRequestStore.errorMessage
        ? ErrorRequestStore.errorMessage
        : "Слишком частые запросы (немного подождите)"}
    </Typography.Text>
  ) : null;
});

export default ErrorRequestContent;
