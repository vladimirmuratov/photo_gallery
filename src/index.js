import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/header'
import Content from 'components/content'
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

