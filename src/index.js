import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import { intialState } from './context/initialState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={intialState} reducer={reducer}>
    <App />
    </StateProvider>
);
