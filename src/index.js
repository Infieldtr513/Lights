import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Connector } from 'mqtt-react';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Connector mqttProps="ws://localhost:9001">
    <App />
  </Connector>,
  document.getElementById('root')
);
