import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Heading, Column, Row, Spinner } from '~gui-library';
import { sitesLoaded } from "~store/entities/sites/sites";
import styles from './sites.module.less';

const Sites = ({ list, loading, sitesLoaded }) => {
  console.log(list);
  return (
    <Card
      heading={
        <Heading>List of oil sites</Heading>
      }
    >
      <Row>
        <Column width={200}>
          <Button
            label="Load sites"
            onClick={sitesLoaded}
            loading={loading}
            disabled={loading}
          />
          
        </Column>
        <Column>
        {loading && <Spinner dark />}
          <div className={styles.sitesList}>
            {list.length ? (
              <ul>
                {list.map((site, i) => (
                  <Link to={`oil/${site.id}`}>
                    <li key={i}>
                      {site.name}
                      {site.country}
                      {site.oilRigs.map((el) => (
                        <p key={el}>{el}</p>
                      ))}
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <em>None loaded</em>
            )}
          </div>
        </Column>
      </Row>
    </Card>
  );
}

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
)(Sites);
export { ConnectedSites as Sites };
