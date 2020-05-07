import React, { Fragment, useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AppNavBar from "./Components/Layouts/AppNavBar";
import Notes from "./Components/Notes";
import AddBtn from "./Components/Layouts/AddBtn";
import AddNotModal from "./Components/AddNotModal";
import EditNoteModal from "./Components/EditNoteModal";
import store from './store'
import {Provider} from 'react-redux'
const App = () => {
  useEffect(() => {
    // Init materialize-css
    M.AutoInit();
    // eslint-disable-next-line
  });
  return (
    <Provider store={store}>
    <Fragment>
      <EditNoteModal />
      <AddNotModal />
      <AddBtn />
      <AppNavBar />
      <div className='container'>
        <Notes />
      </div>
      </Fragment>
      </Provider>
  );
};

export default App;
