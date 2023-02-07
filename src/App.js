import React, { Component } from "react";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import classes from "./App.css";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;