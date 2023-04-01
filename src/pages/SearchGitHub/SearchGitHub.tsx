import React from "react";

import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import ErrorRequestContent from "../../components/ErrorRequestContent/ErrorRequestContent";

import SearchListsContent from "../../components/SearchListsContent/SearchListsContent";

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
