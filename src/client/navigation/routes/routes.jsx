import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TopBar } from '~gui-library';
import Logo from '../../images/logo@2x.png';

import { Main } from '../../views/main/main';
import { OilRigsPage } from '../../views/oilrigs/OilRigsPage';

export const Routes = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" />,
          label: 'Hiring Challenge'
         
        }}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/oil" exact component={OilRigsPage} />
        </Switch>

      </Router>
    </>
  );
};