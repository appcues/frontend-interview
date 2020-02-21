import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CLogo } from "@appcues/component-library";

import Home from "./Home";
import Analytics from "./Analytics";

const Logo = styled(CLogo)`
  max-height: 100%;
  height: 100%;
  margin: 0 auto;
  width: 200px;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  margin: 1em 0;
`;

const Navigation = styled.div`
  width: 100%;
  margin: 1em;
`;

function App() {
  return (
    <Router>
      <Header>
        <Logo />
        <Navigation>
          <Link to="/">Home</Link> |<Link to="/analytics">Analytics</Link>
        </Navigation>
      </Header>
      <Switch>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
