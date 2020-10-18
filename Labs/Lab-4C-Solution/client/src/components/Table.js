import React from 'react';
import TableBody from './TableBody.js';

function Table(props) {
  return (
    <table border="1px solid black">
      <thead>
        <tr>
            <th>id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>department</th>
            <th>salary</th>
            <th>last_promoted</th>
            <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => <TableBody key={employee._id} {...employee} />)}
      </tbody>
    </table>

  );
}

export default Table
