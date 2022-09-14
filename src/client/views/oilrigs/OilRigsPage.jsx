import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sitesLoaded } from "~store/entities/sites/sites";
// import { LOCATION_CHANGE } from 'connected-react-router';


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
    setName(selectedSite[0].name)
    setCountry(selectedSite[0].country)
    setPlatforms(selectedSite[0].oilRigs)
    console.log(selectedSite);
    console.log(name, country, selectedSite[0].oilRigs);

  }, [list])








  // console.log(useSelector(state=>state));
  return (
    <div style={{ marginTop: '100px' }}>
      <h1>Details Page</h1>
      <div>
        <span>Site Name: {name}</span>
        <span>Country Name: {country}</span>
        <span>Platforms Inuse: </span>
        <ul>{platforms?.map((platform)=>(
          <li key={platform}>{platform}</li>
        ))}</ul>
      </div>
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
