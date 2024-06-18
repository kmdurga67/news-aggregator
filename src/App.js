import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";
import SearchBar from "./components/SearchBar";
import Header from "./pages/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Provider>
  );
};

export default App;
