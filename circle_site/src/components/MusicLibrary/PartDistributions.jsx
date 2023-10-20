import React from 'react';

const Table = ({ data }) => {
  const rows = Object.keys(data);

  return (
    <table className='parts'>
      <tbody>
        {rows.map((row) => (
          <tr key={row}>
            <th>{row}</th>
            {data[row].map((cell) => (
              <td key={cell}>{cell.name},</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table