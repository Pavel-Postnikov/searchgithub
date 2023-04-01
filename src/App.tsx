import React, { memo } from "react";
import SearchGitHub from "./pages/SearchGitHub";
import SingleRepository from "./pages/SinglRepository";
import { Route, Routes } from "react-router-dom";

const App: React.FC = memo(() => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SearchGitHub />} />
        <Route path={"/more"} element={<SingleRepository />} />
      </Routes>
    </>
  );
});

export default App;
