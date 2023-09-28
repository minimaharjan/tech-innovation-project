import Papa from 'papaparse';

function CSVtoArray(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result)  => {
        console.log(result.data)
        resolve(result.data)
      },
      error :(err) => {
        reject(err)
      }
    })
  })
}

export { CSVtoArray };
