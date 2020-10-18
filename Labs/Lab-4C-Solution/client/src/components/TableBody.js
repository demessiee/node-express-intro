import React from 'react';

function TableBody(props) {
  return (
    <tr>
      <td>{props._id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.email}</td>
      <td>{props.department}</td>
      <td>{props.salary}</td>
      <td>{props.last_promoted}</td>
      <td><button>Remove</button></td>

    </tr>
  );
}


export default TableBody