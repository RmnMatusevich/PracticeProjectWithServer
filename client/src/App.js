import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Login} exact></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </div>
    </Router>
  );
};

export default App;
