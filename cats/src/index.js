import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Content from './components/Content';
import CatFinder from './components/CatFinder'
import CatCreator from './components/CatCreator'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Content />}>
                <Route path="/create" element={<CatCreator />} />
                <Route path="/" element={<CatFinder />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
