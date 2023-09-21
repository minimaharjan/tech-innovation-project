import React, { useEffect } from "react";
import ReactECharts from 'echarts-for-react';
import test from './test.json'
import * as echarts from 'echarts';

console.log(test.for)

// Option for Showing all nodes and labels
const option0 = {
    tooltip: {},
    legend: [
      {
        data: test.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: test.nodes,
        links: test.links,
        categories: test.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}'
        },
        labelLayout: {
          hideOverlap: true
        },
        scaleLimit: {
          min: 0.4,
          max: 2
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        }
      }
    ]
  };

// Option for Seeing Cluster and Connection
// It shows only major labels
// test.nodes.forEach(node => {
//     node.label = {
//         show : node.symbolSize >30
//     }
// });

const option1 = {
    title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: test.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: test.nodes,
        links: test.links,
        categories: test.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };

const option3 = {
    legend: {
      data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        draggable: true,
        data: test.nodes.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        categories: test.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2
        },
        edges: test.links
      }
    ]
  };
  
  

function NetworkGraph() {
    return (
        <div id="graph-main">
            <ReactECharts
                option={option1}
                style={{height: '400px', width: '100%'}}
            />
        </div>
    );
}

export default NetworkGraph;