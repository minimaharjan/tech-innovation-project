import Papa from 'papaparse';
import axios from 'axios';

function CSVtoArray(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result)  => {
        resolve(result.data)
      },
      error :(err) => {
        reject(err)
      }
    })
  })
}

function structureNodes(data, linkingAttribute, groupingAttribute, excludedAttributes = [], attributeTypeList =[], categories) {
  // excludedAttributes is use to not add attributes to node data if specified
  // attributeTypeList defines which attribute or coluuniqueVuniqueValues.filter((val) => val != undefined)alues.filter((val) => val != undefined)mn is of which type

  // TODO: Add name and value for more insight
  let node_list = [];
  data.forEach((graphNode, nodeIndex) => {
    let node_data = {}
    if(nodeIndex != 0) {
      data[0].forEach((attribute, attrIndex) => {
        node_data[attribute] = graphNode[attrIndex]
        // id can be name or anything or index but will be used to define the source and target for edges
        // Linking Attribute to create ties between nodes
        if (attribute == linkingAttribute) {
          node_data["id"] = graphNode[attrIndex];
          node_data["name"] = graphNode[attrIndex];
        }

        // Grouping Attribute to distinguish different categories/groups
        if (groupingAttribute && attribute == groupingAttribute) {
          node_data["category"] = graphNode[attrIndex]
        }

        // attribute for sizing the node
        // if (attribute == 'AcademicPerformance') {
        //   node_data["symbolSize"] = graphNode[attrIndex]*0.4
        // }
      });
      // node_data["id"] = nodeIndex;

      // attributes for node for graph Use Linking attribute
      // Use this to show node data but have option to turn this off
      // node_data["name"] = "aaas";
      // node_data["value"] =  100;
      // node_data["symbolSize"]= 20;
      node_list.push(node_data);
    }
  });
  console.log(node_list)
  return node_list;
}

function structureEdges(data) {
  let edge_list = [];
  data.forEach((edgeNodes, edgeIndex) => {
    let edge_data = {
      source: '',
      target: ''
    };
    if(edgeIndex != 0) {
      edge_data['source'] = edgeNodes[0];
      edge_data['target'] = edgeNodes[1];
      edge_list.push(edge_data);
    }
  });
  console.log(edge_list);
  return edge_list;
}

function generateUniqueValues(list, attrName) {
  if (attrName) {
    const uniqueValues = [...new Set(list.map((item) => item[attrName]))];
    console.log(uniqueValues.filter((val) => val != undefined))
    return uniqueValues.filter((val) => val != undefined);
  }
  return [];
}

function httpCall(url, method ='get', data) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err.response)
    });
  })
}

export {
  CSVtoArray,
  structureNodes,
  structureEdges,
  generateUniqueValues,
  httpCall
};
