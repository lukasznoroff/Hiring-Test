import React from 'react';
import { Link } from "react-router-dom";
import { Heading, Page } from '~gui-library';
import { OilRigs } from "~client/components/oil-rigs/oil-rigs";
import styles from './list-of-oil-rigs.module.css';



export const ListOfOilRigs = ({ }) => {
  return (
    <Page left={0}>
      <div className={styles.header}>
        <Heading top>List Of Oil Rigs</Heading>
        <Link className={styles.btn} to='/'>Back To Mainpage</Link>
      </div>
        <OilRigs />
    </Page>
  );
};


