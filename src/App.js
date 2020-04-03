import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { Provider } from "react-redux";
import Store from "./store";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import Addbtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/Techs/AddTechModal";
import TechListModal from "./components/Techs/TechListModal";

import "./App.css";

const App = () => {
  useEffect(() => {
    // initialize materialize javascript
    M.AutoInit();
  }, []);

  return (
    <Provider store={Store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Addbtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
