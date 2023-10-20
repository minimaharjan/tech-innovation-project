import React, { useState } from "react";
import ReactECharts from 'echarts-for-react';
import test from './test.json'
import * as echarts from 'echarts';
import { generateUniqueValues } from 'utils/utils'
import { Button } from "react-bootstrap";
import GraphStatistics from "./GraphStatistics";

// Option for Seeing Cluster and Connection
// It shows only major labels
// test.nodes.forEach(node => {
//     node.label = {
//         show : node.symbolSize >30
//     }
// });

function NetworkGraph(props) {
  const [showGraphStats, setShowGraphStatModal] = useState(false)

  const graphOptions = {
    title: {
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    // legend to be done by categories/binary/other attribute
    legend:
      {
        show: !!props.nodeGroupingAttribute,
        data: generateUniqueValues(props.nodes, props.nodeGroupingAttribute)
      },
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
        }
    },
    series: [
      {
        name: 'Node',
        type: 'graph',
        layout: props.layout || 'force', /* Options: 'circular', 'force', 'none' */
        circular: {
          rotateLabel: true
        },
        zoom: 0.5,
        // Color of nodes
        // color: "#ff",
        force: {
          edgeLength: 200,
          repulsion: 1000,
          gravity: 1,
          friction: 0.2
        },
        lineStyle: {
          // color: 'source',
          // curveness: 0.3
        },
        // symbol: 'triangle', /* 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' */
        // Enable this if directed
        edgeSymbol: props.directed ? ['none', 'arrow']: ['none', 'none'],
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
    return (
        <div id="graph-main" className="border bg-white p-2 h-100">
            <ReactECharts
                option={graphOptions}
                style={{"height": '100%'}}
            />
            <Button size="sm" onClick={() => {setShowGraphStatModal(true)}} variant="warning" id="graph-statistics-btn" data-html2canvas-ignore="true">Show Graph Statistics</Button>

            {
              showGraphStats &&
                <GraphStatistics
                  show={showGraphStats}
                  onHide={() => { setShowGraphStatModal(false) }}
                  graphStats={props.graphStats}
                  directed={props.directed}
                />
            }

            {/* <Button size="sm">Update Graph Options</Button> */}
            {/* Also add options to update the graph layout or nodes*/}
        </div>
    );
}

export default NetworkGraph;
