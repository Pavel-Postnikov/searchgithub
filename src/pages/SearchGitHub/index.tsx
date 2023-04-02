import React from "react";

import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import HeaderContent from "../../components/HeaderContent";
import ErrorRequestContent from "../../components/ErrorRequestContent";

import SearchListsContent from "../../components/SearchListsContent";

const SearchGitHub: React.FC = observer(() => {
  return (
    <Layout>
      <HeaderContent />
      <ErrorRequestContent />
      <SearchListsContent />
    </Layout>
  );
});

export default SearchGitHub;
