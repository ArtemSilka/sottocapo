import React from "react";
import './App.css';

import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        CHATBOT TEST
      </div>
    </Provider>
  );
}

export default App;
