import React, { Fragment } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sitesLoaded } from "~store/entities/sites/sites";
import { Card } from '~gui-library';
import styles from './oil-rigs-page.module.css';

const OilRigsPage = ({ list, loading }) => {
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [platforms, setPlatforms] = useState();
  const oilRigId = useParams().id;
  let selectedSite = [];
  useEffect(() => {

    selectedSite = list.filter((el) => (
      el.id === oilRigId
    ))
    setName(selectedSite[0].name);
    setCountry(selectedSite[0].country);
    setPlatforms(selectedSite[0].oilRigs);
    console.log(selectedSite);
    console.log(name, country, selectedSite[0].oilRigs);
  }, [list])
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <h1>Details Page</h1>
        <Link className={styles.btn} to='/'>Back To Mainpage</Link>
      </div>
      <Card height="200px">
    
      <div className={styles.CardWrapper}>
        <h3>Site: {name}</h3>
        <h3>Country: {country}</h3>
        <h3>Platforms Inuse: </h3>
        <ul>{platforms?.map((platform) => (
          <li key={platform}>{platform}</li>
        ))}</ul>
      </div>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ entities }) => {
  const { sites } = entities;
  return {
    loading: sites.loading,
    list: sites.list
  }
};

const mapDispatchToProps = {
  sitesLoaded,
};

const ConnectedSites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OilRigsPage);
export { ConnectedSites as OilRigsPage };
