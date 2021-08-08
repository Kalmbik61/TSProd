import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./common/components/layout";
import TechPage from "./common/components/TechPage/TechPage";
function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Layout>
            {/* <Route path='/tech' component={TechPage} /> */}
            <TechPage />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
