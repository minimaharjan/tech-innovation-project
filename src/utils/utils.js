import Papa from 'papaparse';

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

function structureNodes(data, excludedAttributes = [], attributeTypeList =[], categories, mainFeature) {
  // excludedAttributes is use to not add attributes to node data if specified
  // attributeTypeList defines which attribute or coluuniqueVuniqueValues.filter((val) => val != undefined)alues.filter((val) => val != undefined)mn is of which type

  // TODO: Add name and value for more insight
  let node_list = [];
  data.forEach((graphNode, nodeIndex) => {
    let node_data = {}
    if(nodeIndex != 0) {
      data[0].forEach((attribute, attrIndex) => {
        node_data[attribute] = graphNode[attrIndex]
        // Groupby attribute too needed along with main linking attribute



        if (attribute == "Country") {
          node_data["category"] = graphNode[attrIndex]
        }
        // if (attribute == 'AcademicPerformance') {
        //   node_data["symbolSize"] = graphNode[attrIndex]*0.4
        // }
      });
      // id can be name or anything or index but will be used to define the source and target for edges
      node_data["id"] = nodeIndex;

      // attributes for node for graph Use Linking attribute
      node_data["name"] = "aaas";
      // node_data["value"] =  100;
      // node_data["symbolSize"]= 20;
      // node_data["category"] = data[nodeIndex][]; /* Category Index */
      node_list.push(node_data);
    }
    // data

  });
  console.log(node_list)
  return node_list;
}

function structureEdges() {

}

function generateUniqueValues(list, attrName) {
  const uniqueValues = [...new Set(list.map((item) => item[attrName]))];
  console.log(uniqueValues.filter((val) => val != undefined))
  return uniqueValues.filter((val) => val != undefined);
}

export { CSVtoArray, structureNodes, generateUniqueValues };
