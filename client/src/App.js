import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Component/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
