import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Heading, Column, Row, Spinner, Grid } from '~gui-library';
import { sitesLoaded } from "~store/entities/sites/sites";
import styles from './sites.module.less';
import { useState } from 'react';
// import styles from './MainPage.module.css'

const Sites = ({ list, loading, sitesLoaded }) => {
  const [sortedList, setSortedList] = useState(list)
  useEffect(() => {
    setSortedList(list)
  }, [list])
  const sortByName = () => {
    const sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1
    const sorted = sortedList.slice().sort(sortByKey('name'))
    setSortedList(sorted);
  }

  return (
    <Card
      heading={
        <div className={styles.header}>
          <Heading>List of oil sites</Heading>
          <div className="buttonWrapper">
            <Link className={styles.btn} to='chartview'>Chart page</Link>
            <Link className={styles.btn} to='listofoilrigs'>List Of Oil Rigs</Link>
          </div>
        </div>
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
          <Button
            label="Sort sites"
            onClick={sortByName}

          />

        </Column>
        <Column>
          {loading && <Spinner dark />}
          <div className={styles.sitesList}>
            {sortedList.length ? (
              <Grid className={styles.grid} columns="1fr 1fr 1fr" height="700px" gap="10px">
                {sortedList.map((site, i) => (
                  <Link key={i} to={`oil/${site.id}`}>
                    <Card>
                      <div className={styles.card}>
                        <h2>Name: {site.name}</h2>
                        <h2>Country: {site.country}</h2>
                        <h3>Oil Rings</h3>
                        <div className={styles.oilRingsWrapper}>
                          {site.oilRigs.map((el) => (
                            <p key={el}>{el}</p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </Grid>
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
