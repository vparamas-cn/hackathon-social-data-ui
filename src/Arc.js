import React, { useEffect } from 'react';
import GaugeChart from "react-gauge-chart";

const ChartGraph = () => {
  useEffect(() => {

  }, [])
  return (
    <div className="gauage">
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={420}
        arcsLength={[0.6, 0.4]}
        colors={["#ff0000", "#cccccc"]}
        percent={0.703}
        animate={true}
        hideText={true}
        cornerRadius={0}
        arcWidth={0.4}
        arcPadding={0}
      />
      <div className="start">0%</div>
      <div className="end">100%</div>
      <div className="value">70.38%</div>
    </div>
  )
}
export default ChartGraph;