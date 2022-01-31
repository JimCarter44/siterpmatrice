import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Gouvernment from "./page/gouvernment/Gouvernment";
import RoadLaw from "./component/RoadLaw/RoadLaw";
import CivilLaw from "./component/CivilLaw/CivilLaw";
import SanAndreasConstitution from "./component/SanAndreasConstitution/SanAndreasConstitution";

ReactDOM.render(
  <React.StrictMode>
    <SanAndreasConstitution />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
