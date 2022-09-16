import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TopBar } from '~gui-library';
import Logo from '../../images/logo@2x.png';
import { Main } from '../../views/main/main';
import { OilRigsPage } from '../../views/oilrigs/OilRigsPage';
import { ChartViewPage } from '../../views/chartview/ChartViewPage';
import { ListOfOilRigs } from '../../views/listOfOilRigs/ListOfOilRigs'


export const Routes = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" />,
          label: 'Hiring Challenge',
        }}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/oil/:id" exact component={OilRigsPage} />
          <Route path="/chartview" exact component={ChartViewPage} />
          <Route path="/listofoilrigs" exact component={ListOfOilRigs} />
        </Switch>
      </Router>
    </>
  );
};