import React from 'react';

const Customer = ({ sequence, customerGroup, id,index, updateCustomerName, customerName }) => {
  return (
    <tr>
      <td>{sequence}</td>
      <td>{customerGroup}</td>
      <td onClick={() => updateCustomerName({ id, index, customerName })}>{customerName}</td>
    </tr>
  )
}

export default React.memo(Customer);
