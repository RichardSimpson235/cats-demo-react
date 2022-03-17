import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
