import React from 'react';
import '../css/table.css';

const Table = ({ headers, data }) => {
  return (
    <div className="table-container">
      <h3 className="table-title">Last 10 transactions</h3>
      <table className="custom-table">
        <thead>
          <tr className='font-normal'>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td className='text-sky-300'>{row.date}</td>
              <td>
                <span className={row.status.toLowerCase()}>{row.status}</span>
              </td>
              <td className="amount">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
