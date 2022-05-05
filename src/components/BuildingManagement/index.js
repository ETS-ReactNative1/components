import { Grid } from '@material-ui/core';
import React from 'react';
import Panel from '../Panel';
import { Card } from './Card';
import styled from 'styled-components';

export const Spacer = styled.div`
  height: 36px;
`;

const BuildingManagement = ({ building }) => {
  const {
    management_firm,
    management_firm_address,
    management_firm_phone,
    account_executive,
    account_executive_phone,
    front_desk_phone
  } = building;

  if (!management_firm && !account_executive && !front_desk_phone) {
    return null;
  }

  return (
    <Panel panelTitle={'Management'}>
      <Spacer />
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6}>
          <Card
            cardTitle={'Management Firm'}
            title={management_firm}
            infoList={[management_firm_address, management_firm_phone]}
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            cardTitle={'Account Executive'}
            title={account_executive}
            infoList={[account_executive_phone]}
          />
        </Grid>
        <Grid item xs={6}>
          <Card cardTitle={'Front Desk'} title={front_desk_phone} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Panel>
  );
};

export default BuildingManagement;
