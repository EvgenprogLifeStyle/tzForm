import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import App from './App';
import MyContext, {store} from "./state/MyContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <MyContext.Provider value={store}>
        <App/>
    </MyContext.Provider>
);