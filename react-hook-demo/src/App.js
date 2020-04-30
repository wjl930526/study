import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Demo1 from "./pages/Demo1";
// import Demo2 from "./pages/Demo2";
import "./App.css";

function App() {
  return (
    // <Provider store={configureStore()}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/demo1" exact={true} component={Demo1} />
          <Redirect from="/" to="/demo1" />
          {/* <Route path="/demo2" exact={true} component={Demo2} /> */}
        </Switch>
      </Router>
    </div>
    // </Provider>
  );
}

export default App;
