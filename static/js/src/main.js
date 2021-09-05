import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home";

var msg = "Hello, world!";

ReactDOM.render(<Home msg={msg} />, document.getElementById("app"));
