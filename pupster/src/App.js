import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Main} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/search" component={Search} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
