import React from "react";
import Input from "./InputForm";
import Output from "./Output.jsx";
import PhoneDet from "./PhoneDet";
import ContrOrg from "./ContrOrgDet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles.css";

const NotFoundPage = () => <div>404! Page Not Found!</div>;

export default function App() {
  return (
    <div className="App">
      
      {/* <Nav />
      <FormPage />
      <Input />
      <Output />
      <PhoneDet />
      <ContrOrg /> */}
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Input} />
            <Route path="/output" exact component={Output} />
            <Route path="/phone" exact component={PhoneDet} />
            <Route path="/contrOrg" exact component={ContrOrg} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
