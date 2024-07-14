import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import store from "../reduxStore/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
