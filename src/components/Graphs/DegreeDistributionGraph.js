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
      nameGap: 35
    },
    series: [
      {
        data: props.degreeOccurenceList,
        type: 'bar'
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
