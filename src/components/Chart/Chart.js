import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props =>{
    const dataPointerValue = props.dataPoint.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...dataPointerValue);

    return <div className="chart">
        {props.dataPoint.map(dataPoint=>(
        <ChartBar 
        key= {dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        ></ChartBar>))}
    </div>
    
}

export default Chart;