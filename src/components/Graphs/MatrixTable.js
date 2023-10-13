import React from 'react';
import { Table } from 'react-bootstrap';

const MatrixTable = ({ matrixData }) => {
  if (!matrixData) {
    // Handle the case where matrixData is not available
    return <div>No data available</div>;
  }
  
  return (
    <Table bordered hover>
      <tbody>
        {matrixData &&
          matrixData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MatrixTable;
