import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Heading, Column, Row, Spinner, Grid } from '~gui-library';
import { sitesLoaded } from "~store/entities/sites/sites";
import styles from './sites.module.less';

const Sites = ({ list, loading, sitesLoaded }) => {
  console.log(list);
  return (

    <Card
      heading={
        <div className={styles.header}>
          <Heading>List of oil sites</Heading>
          <Link className={styles.btn} to='chartview'>Chart page</Link>
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

        </Column>
        <Column>
          {loading && <Spinner dark />}
          <div className={styles.sitesList}>
            {list.length ? (
              // <ul>
              //   {list.map((site, i) => (
              //     <Link key={i} to={`oil/${site.id}`}>
              //       <li>
              //         {site.name}
              //         {site.country}
              //         {site.oilRigs.map((el) => (
              //           <p key={el}>{el}</p>
              //         ))}
              //       </li>
              //     </Link>
              //   ))}
              // </ul>
              <Grid columns="1fr 1fr 1fr" height="700px" gap="5px">

                {list.map((site, i) => (
                  <Link key={i} to={`oil/${site.id}`}>
                    <Card>
                      <div className={styles.card}>
                        {site.name}
                        {site.country}
                        {site.oilRigs.map((el) => (
                          <p key={el}>{el}</p>
                        ))}
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
