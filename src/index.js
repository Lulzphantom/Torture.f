import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Provider } from 'react-redux'
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    rootElement
);
