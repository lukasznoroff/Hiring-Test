import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sitesLoaded } from '~store/entities/sites/sites';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import styles from './ChartViewPage.module.css';

const options = Object.freeze(
  {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        ticks: { precision: 0 }
      }
    },
  }
)

const ChartViewPage = ({ list, sitesLoaded }) => {

  const [countries, setCoutries] = useState([])
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    sitesLoaded()
  }, []);


  useEffect(() => {
    setCoutries(list.map((el) => el.country));
    setQuantity(list.map((el) => el.oilRigs.length));
  }, [list])

  const data = {
    labels: countries,
    datasets: [{
      label: 'amount of oil rigs',
      data: quantity,
      backgroundColor: ['#8d9ac5', '#b9b9d1', '#cdc6d7', '#e7cfd5', '#eedad9'],
    }]
  }

  return (
    <>
      <div className={styles.chartHeader}>
        <h1 className={styles.titleHeading}>Chart</h1>
        <Link className={styles.btn} to='/'>Back To Mainpage</Link>
      </div>
      <div className={styles.barWrapper}>
        <Bar data={data} options={options} />
      </div>
    </>
  )
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
)(ChartViewPage);
export { ConnectedSites as ChartViewPage };

