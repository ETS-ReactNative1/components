import React, { useState, useEffect } from 'react';
import Panel from '../Panel';
import TopPanelSpacer from '../Panel/TopPanelSpacer';
import { Title } from './styled-components';
import Table from './Table';
import Tabs from './Tabs';

function checkRow(label, value) {
  if (!!value) {
    return { label, value };
  }
  return null;
}

const Financials = ({ data }) => {
  const { property_tax_records = [] } = data;
  const periods = property_tax_records.map((record) => record.period).sort((a, b) => a - b);
  const [currentTab, setCurrentTab] = useState(() => {
    if (periods.length > 0) {
      return periods[0];
    }
    return null;
  });
  const [currentPeriodData, setCurrentPeriodData] = useState(currentTab);

  useEffect(() => {
    setCurrentPeriodData(property_tax_records.find((record) => record.period === currentTab));
  }, [currentTab]);

  if (property_tax_records.length === 0) {
    return null;
  }

  const {
    land_market_value,
    building_market_value,
    total_market_value,
    land_assessed_value,
    building_assessed_value,
    limitations_and_exemptions,
    total_assessed_value,
    tax_rate,
    tax_amount
  } = currentPeriodData;

  return (
    <Panel panelTitle="Financials">
      <TopPanelSpacer />
      <Title>Property Tax</Title>
      <Tabs items={periods} active={currentTab} onChange={(tab) => setCurrentTab(tab)} />
      <Table
        rows={[
          checkRow('Land Market Value', land_market_value),
          checkRow('Building Market Value', building_market_value),
          checkRow('Total Market Value', total_market_value)
        ]}
      />
      <Table
        rows={[
          checkRow('Land Assessed Value', land_assessed_value),
          checkRow('Building Assessed Value', building_assessed_value),
          checkRow('Limitations & Exemptions', limitations_and_exemptions),
          checkRow('Total Assessed Value', total_assessed_value)
        ]}
      />
      <Table rows={[checkRow('Tax Rate', tax_rate), checkRow('Annual Property Tax', tax_amount)]} />
    </Panel>
  );
};

export default Financials;
