import React from 'react';
import { Heading, Page } from '~gui-library';
import { Sites } from '~client/components/sites/sites';


export const Main = ({ }) => {
  return (
    <Page left={0}>
      <Heading top>Hiring Challenge</Heading>
      <Sites />
    </Page>
  );
};
