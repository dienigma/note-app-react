import React from "react";
import ReactDOM from "react-dom";

import NoteApp from "./components/NoteApp";

import * as serviceWorker from "./serviceWorker";

//State Object --> { count: 0, name:"" }

ReactDOM.render(<NoteApp></NoteApp>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
