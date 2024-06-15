import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Provider>
  );
};

export default App;
