import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes
import Sample from "./scenes/sample/Sample";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/sample`} component={Sample} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
