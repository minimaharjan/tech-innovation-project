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
          myZoomButton: {
            show: true,
            title: 'Show Graph in FullScreen',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: () => {
              if(document.fullscreenElement){
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                  document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                  document.msExitFullscreen();
                }
              } else {
                let graphContainer = document.getElementById("graph-main");
                if (graphContainer.requestFullscreen) {
                  graphContainer.requestFullscreen();
                } else if (graphContainer.webkitRequestFullscreen) { /* Safari */
                  graphContainer.webkitRequestFullscreen();
                } else if (graphContainer.msRequestFullscreen) { /* IE11 */
                  graphContainer.msRequestFullscreen();
                }
              }

            }
          }
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
        // Color of nodes
        // color: "#ff",
        force: {
          edgeLength: 200,
          repulsion: 1000,
          gravity: 1
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
            <Button size="sm" onClick={() => {setShowGraphStatModal(true)}} variant="warning" id="graph-statistics-btn">Show Graph Statistics</Button>

            {
              showGraphStats &&
                <GraphStatistics
                  show={showGraphStats}
                  onHide={() => { setShowGraphStatModal(false) }}
                  graphStats={props.graphStats}
                />
            }

            {/* <Button size="sm">Update Graph Options</Button> */}
            {/* Also add options to update the graph layout or nodes*/}
        </div>
    );
}

export default NetworkGraph;
