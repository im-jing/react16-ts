import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./view/menu";
import Home from "./containers/home";
import UiDesign from "./containers/ui-design";
import routes from "./data/routes";

import "./App.css";
import "./static/style/index.scss";

const createRoutes = routes.map((route, idx) => {
  return (
    <Route
      key={idx}
      exact={idx === 0 ? true : false}
      path={route.path}
      component={route.component}
    ></Route>
  );
});

function App() {
  return (
    <div className="app">
      <Menu />
      <Router>
        <Switch>{createRoutes}</Switch>
      </Router>
    </div>
  );
}

export default App;
