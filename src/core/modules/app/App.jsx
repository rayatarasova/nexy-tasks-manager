import React from "react";
import { Provider } from "react-redux";
import configureStore from '../../configureStore'
import AppComponent from "./components/AppComponent";

const store = configureStore();

const App = () => (
  <Provider {...{ store }}>
    <AppComponent/>
  </Provider>
);

export default App;
