import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {PositionProvider} from './PositionContext';
import {ConditionsProvider} from './ConditionsContext';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <ConditionsProvider>
    <PositionProvider>
      <App />
    </PositionProvider>
  </ConditionsProvider>
, rootElement);