import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./common/components/layout";
import ConnectingBlockchain from "./common/components/Pages/ConnectingBlockchain/ConnectingBlockchain";
import TechPage from "./common/components/Pages/TechPage/TechPage";
import Handicap from "./common/components/Pages/Handicap/Handicap";
import FAQ from "./common/components/Pages/FAQ/FAQ";
import Press from "./common/components/Pages/Press/Press";
import News from "./common/components/Pages/News/News";
import Admin from "./common/components/Pages/Admin/Admin";

function App(): JSX.Element {
  return (
    <div className='App'>
      <HashRouter basename={"/#"} hashType='noslash'>
        <Switch>
          <Layout>
            <Route path='/' component={ConnectingBlockchain} exact />
            <Route path='/features' component={TechPage} />
            <Route path='/handicap' component={Handicap} />
            <Route path='/faq' component={FAQ} />
            <Route path='/press' component={Press} />
            <Route path='/news' component={News} />
            <Route path='/admin111' component={Admin} />
            {/* <Redirect to='/'/> */}
          </Layout>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
