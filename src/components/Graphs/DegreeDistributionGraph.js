import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function DegreeDistributionGraph(props) {
  const options = {
    title: {
      text: 'Degree Distribution'
    },
    xAxis: {
      type: 'category',
      data: props.degreeList,
      name: 'Degree',
      nameLocation: 'center',
      nameGap: 35
    },
    yAxis: {
      type: 'value',
      name: 'Number of nodes',
      nameLocation: 'center',
      nameGap: 35,
      minInterval: 1
    },
    calculable: true,
    tooltip: {
      trigger: 'axis'
    },
    series: [
      {
        data: props.degreeOccurenceList,
        type: 'bar',
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        }
      }
    ]
  };

  return (
    <ReactECharts
      option={options}
      style={{"width": '100%'}}
      className={props.className}
    />
  );
}

export default DegreeDistributionGraph;
