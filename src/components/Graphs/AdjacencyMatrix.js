import React from 'react';

function AdjacencyMatrix({ matrix }) {
  return (
    <table border="1">
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td key={colIndex}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdjacencyMatrix;
