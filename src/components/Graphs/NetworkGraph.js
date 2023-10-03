import React, { useEffect } from "react";
import ReactECharts from 'echarts-for-react';
import test from './test.json'
import * as echarts from 'echarts';
import { generateUniqueValues } from 'utils/utils'


// Make option for graph to apply proper graph data
// Nodes need id by default when passing if does not exist

// Option for Showing all nodes and labels
// const option0 = {
//     tooltip: {},
//     legend: [
//       {
//         data: test.categories.map(function (a) {
//           return a.name;
//         })
//       }
//     ],
//     series: [
//       {
//         name: 'Les Miserables',
//         type: 'graph',
//         layout: 'none',
//         data: test.nodes,
//         links: test.links,
//         categories: test.categories,
//         roam: true,
//         label: {
//           show: true,
//           position: 'right',
//           formatter: '{b}'
//         },
//         labelLayout: {
//           hideOverlap: true
//         },
//         scaleLimit: {
//           min: 0.4,
//           max: 2
//         },
//         lineStyle: {
//           color: 'source',
//           curveness: 0.3
//         }
//       }
//     ]
//   };

// Option for Seeing Cluster and Connection
// It shows only major labels
// test.nodes.forEach(node => {
//     node.label = {
//         show : node.symbolSize >30
//     }
// });

function NetworkGraph(props) {
  const option1 = {
    title: {
      // text: 'Network Graph',
      // subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    // legend to be done by categories/binary/other attribute
    // Need Logical thinkign on that
    legend: [
      {
        data: generateUniqueValues(props.nodes, props.nodeGroupingAttribute)
      }
    ],
    // dimensions: props.dimensions,
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    toolbox: {
        show: true,
        feature: {
          saveAsImage: {
            show: true,
            name: 'Network Graph'
          },
          // User defined function button and tools
          // Start with word 'my' to define it
          // myhellotool: {
          //   show: true,
          //   title: 'Hello',
          //   onclick: function() {
          //     alert(1)
          //   }
          // }
        }
    },
    series: [
      {
        // name: 'Network Graph',
        type: 'graph',
        layout: props.layout || 'force', /* Options: 'circular', 'force', 'none' */
        circular: {
          rotateLabel: true
        },
        // Color of nodes
        // color: "#ff",
        force: {
          repulsion: 100
        },
        lineStyle: {
          // color: 'source',
          // curveness: 0.3
        },
        // symbol: 'triangle', /* 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' */
        // Enable this if directed
        // edgeSymbol: ['circle', 'arrow'],
        data: props.nodes,
        links: props.edges,
        // Add this Option to show Links if user specifies
        emphasis: {
          disabled: !props.emphasis,
          focus: 'adjacency', // 'self', 'series', 'adjacency'
          blurScope: 'coordinateSystem',
          lineStyle: {
            width: 5
          }
        },
        // Add weight for graph
        categories: generateUniqueValues(props.nodes, props.nodeGroupingAttribute).map(cat => {
          return {"name": cat}
        }),

        roam: true,
        // label: {
        //   position: 'right',
        //   formatter: '{b}'
        // },
      }
    ]
  };
  console.log(option1)

  // const option3 = {
  //     legend: {
  //       data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
  //     },
  //     series: [
  //       {
  //         type: 'graph',
  //         layout: 'force',
  //         animation: false,
  //         label: {
  //           position: 'right',
  //           formatter: '{b}'
  //         },
  //         draggable: true,
  //         data: test.nodes.map(function (node, idx) {
  //           node.id = idx;
  //           return node;
  //         }),
  //         categories: test.categories,
  //         force: {
  //           edgeLength: 5,
  //           repulsion: 20,
  //           gravity: 0.2
  //         },
  //         edges: test.links
  //       }
  //     ]
  //   };
    return (
        <div id="graph-main">
            <ReactECharts
                option={option1}
                style={{height: '400px', width: '100%'}}
            />
            {/* Also add options to update the graph */}
        </div>
    );
}

export default NetworkGraph;
