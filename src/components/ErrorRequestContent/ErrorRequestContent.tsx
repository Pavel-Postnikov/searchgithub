import { observer } from "mobx-react-lite";
import ErrorRequestStore from "../../store/errorRequestStore";
import { Typography } from "antd";
import React from "react";

const ErrorRequestContent: React.FC = observer(() => {
  return ErrorRequestStore.hasErrorFast ? (
    <Typography.Text type="danger" style={{ textAlign: "center" }}>
      {ErrorRequestStore.errorMessage
        ? ErrorRequestStore.errorMessage
        : "Слишком частые запросы (немного подождите)"}
    </Typography.Text>
  ) : null;
});

export default ErrorRequestContent;
