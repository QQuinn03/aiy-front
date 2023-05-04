import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import ReferenceLetter from "./components/ReferenceLetter";
import PS from "./components/PS";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={UserRegistration} />
        <Route path="/login" component={UserLogin} />
        <Route path="/reference-letter" component={ReferenceLetter} />
        <Route path="/essay" component={PS} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
