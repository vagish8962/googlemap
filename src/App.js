import React from 'react';
import { Chart } from "react-google-charts";
import {  useEffect, useState } from 'react';

import Select from './Select';
import data from './report.js';
import './App.css';

const options = [
  { value: 'sales', label: 'Overall Sales' },
  { value: 'orders', label: 'Overall Order' },
  { value: 'pageViews', label: 'Page Views' },
  { value: 'clickThruRate', label: 'Click Thru Rate' }
];

let optionschart = {
  curveType: "function",
  legend: { position: "bottom" }
};

function App() {
  /* Setting State of intial Data */
  const [tranformData, settranformData] = useState([]);
  
  useEffect(() => {
    /* Life Cycle to Load data only one time */
    selectedoptionValue({ value: 'sales', title: 'Overall Sales' });
  },[]);

  const selectedoptionValue = ({title, value}) => {
   const newtranformData = data.records.
    reduce((acc, val)=> [...acc, [ val.date, val[value]]],[['Year', value]]);
    settranformData(newtranformData);
    optionschart.title = title;
  }
 
  return (
    <div className={"my-pretty-chart-container"}>
        <Select 
          options = { options }
          selectedoption = { selectedoptionValue }/>
          {tranformData.length && <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={tranformData}
              options={optionschart}
            />} 
      </div>);
}

export default App;
