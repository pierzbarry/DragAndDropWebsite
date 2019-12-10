import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { GridProvider } from "./components/GridContext";
import * as serviceWorker from './serviceWorker';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'spectre.css';
import './index.css';

ReactDOM.render( 
  <DndProvider backend={HTML5Backend}>
    <GridProvider>
      <App />
    </GridProvider>
  </DndProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
