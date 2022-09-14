import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { sitesLoaded } from "~store/entities/sites/sites";
import { Button, Card, Heading, Column, Row, Spinner } from '~gui-library';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from './ChartViewPage.module.css'

const ChartViewPage = ({list, sitesLoaded}) => {

const [countries, setCoutries] = useState([])
const [quantity, setQuantity] = useState([])

useEffect(() => {
 sitesLoaded()
}, [])


useEffect(() => {
  console.log(list)
  setCoutries(list.map((el) => el.country));
  setQuantity(list.map((el) => el.oilRigs.length));

},[list])

const data = {
  labels: countries,
  datasets: [{
    label: 'amount of oil rigs',
    data: quantity
  }]
}

  console.log(list);
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: { position: "top" },
  //     title: {
  //       display: true,
  //       text: "Chart.js Bar Chart"
  //     }
  //   },
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //          min: 0,
  //          stepSize: 2
  //        }
  //      }]
  //     },
  // };
  return (
    <>
    <div className={styles.chartHeader}>
      <h1 className={styles.titleHeading}>Chart</h1>
      <Link className={styles.btn} to='/'>Back To Mainpage</Link>
    </div>

      {/* <Bar data={data} options={options} /> */}
      <div className={styles.barWrapper}>
      <Bar  data={data}/>

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

